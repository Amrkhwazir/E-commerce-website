import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if(!username || !password){
      alert("Please fill all fields");
    }if(password < 8){
    alert("enter password minimum 8 letters")
  }else{
    login(dispatch, { username, password });
    
  }}


  return (
    <div className="main"> 
    <div className="wrapper" >
      <div className="title">Sign in</div>    
      <form className="loginForm" >

      <input
      className="loginInput"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
            className="loginInput"

        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="Btn" onClick={handleClick}>
        Login
      </button>
      </form>
      </div>
      </div>
      );
      };

export default Login;