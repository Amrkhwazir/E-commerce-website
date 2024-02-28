const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const validator = require('validator');

//REGISTER
router.post("/register", async (req, res) => {

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'minhajrashid2017@gmail.com',
      pass: 'ajii ifco gfzi okkj'
    }
  });


  const mailOptions = {
    from: 'minhajrashid2017@gmail.com',
    to: req.body.email,
    subject: "Welcome to MegaMart",
    text: "Hello and welcome to MegaMart ! 🌟 Were thrilled to have you here.Whether you're exploring our services, discovering exciting content, or seeking valuable information, we're here to make your experience enjoyable and seamless. If you have any questions or need assistance, feel free to reach out. Happy browsing! 🚀✨"
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials!");

    const filterPassword = bcrypt.compareSync(req.body.password, user.password);

    if(!filterPassword) return res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});


// >------------------------
// >> Forgot Password logic
// >------------------------

router.post("/forgotpassword", async (req, res, next) => {
  const emailConfig = {
    service: "gmail",
    auth: {
      user: 'minhajrashid2017@gmail.com',
      pass: 'ajii ifco gfzi okkj'
    },
  };

  const transporter = nodemailer.createTransport(emailConfig);

    const mailOptions = {
      from: "minhajrashid2017@gmail.com",
      to: req.body.email,
      subject: "PASSWORD RECOVERY",
      text: `Thank you for using MegaMart. Use the following step to complete your Password}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { status: true, message: `message sent to ${mail} via email` };
    } catch (error) {
      console.log(error)
    }

  try {
    const { email } = req.body;
    const validateEmail = validator.isEmail(email)
    console.log(validateEmail);
    if (!validateEmail) {
      return res.status(401).send({
        status: false,
        message: "Please provide correct Email for verification.",
      });
    } else {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).send({
          status: false,
          message: "User not found",
        });
      }
    }
  } catch (err) {
    next(err);
  }
})


// >------------------------
// >> Reset Password logic
// >------------------------

router.post("/resetpassword/:id/:token", async (req, res, next) => {
  // console.log("reset password email cotroller");
  try {
    const { newPassword, confirmNewPassword, token } = req.body;
    if (newPassword && confirmNewPassword && token) {
      const { id } = verify(token, process.env.JWT_SEC);
      // console.log(id);
      const userId = id.slice(process.env.JWT_SEC.length - id.length);
      // console.log(userId);
      const user = await User.findById(userId);
      if (user) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await User.findByIdAndUpdate(userId, {
          $set: { password: hashedPassword },
        });
        return res.status(OK).send({
          status: true,
          message: "Password has been Changed kindly login",
        });
      } else {
        res
          .status(NOTFOUND)
          .send(createError(NOTFOUND, responseMessages.NO_USER));
      }
    } else {
      res
        .status(BADREQUEST)
        .send(createError(BADREQUEST, responseMessages.MISSING_FIELDS));
    }
  } catch (err) {
    console.log(err);
    return res
      .status(INTERNALERROR)
      .send(createError(INTERNALERROR, err.message));
  }
})

module.exports = router;
