import { useState } from "react";
import styled from "styled-components";
import { forgetPassword, login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const ForgetPassword = () => {
  const [nPassword, setNpassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching} = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    if(nPassword === cPassword) {
      return toast.error("Please Enter Valid password")
    }else if(nPassword.length > 8 && cPassword > 8){
      return toast.error("Please Enter maximum 8 letters")
    }else{

      forgetPassword(dispatch, { nPassword, cPassword });
      setTimeout((()=>{
        navigate("/");
      }),2000);
    };
  };
  return (
    <Container>
      <Wrapper>
        <Title>CHANGE PASSCODE</Title>
        <Form>
          <Input
            placeholder="New Password"
            type="password"
            onChange={(e) => setNpassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setCPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            SUBMIT
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ForgetPassword;
