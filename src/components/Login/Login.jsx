import React from 'react'
import "./css/Login.css"
import studentimg from "../../assets/studentimg.png";

const Login = () => {
  return (
    <div className="Login-MainContainer">
      <div className="Login-innercontainer">
        <h1>Smart Student</h1>
        <h1>Deadline Manager</h1>
        <img src={studentimg} alt="" className="Login-studentimg" />
        <div className="Login-formcontainer">
          <input type="text" placeholder="Enter Your email" />
          <input type="text" placeholder="Enter Your passward" />
          <div className="Login-options">
            <label className="Login-Remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="">Sign up</a>
          </div>
          <button>Login in</button>
          <a href="">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login