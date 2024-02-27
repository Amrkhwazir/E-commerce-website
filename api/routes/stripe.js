const router = require("express").Router();
const { v4: uuidv4, v4 } = require('uuid');
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  // const [product, token] = req.body;
  // console.log("product", product);
  // console.log("price", product.price);
  // const idempotency_key = v4()
  
  // stripe.customers.create({
  //   email: token.email,
  //   source: token.id
  // })
  //   .then((customer) => {
  //     stripe.charges.create({
  //       amount: product.price * 100,
  //       currency: "usd",
  //       customer: customer.id,
  //       receipt_email : token.email,
  //       description : "purchase of product name",
  //       shipping: {
  //         name : token.card.name,
  //         address: {
  //           country : token.card.address_country
  //         },
  //       }
  //     }, {idempotency_key})
  //   }).then(result => res.status(200).json(result))
  //   .catch(error => console.error(error));

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
      receipt_email : req.body.email,
      description : "purchase of product name",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
