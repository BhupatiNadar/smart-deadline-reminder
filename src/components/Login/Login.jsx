import React from 'react'
import { Form, Link } from 'react-router-dom';
import "./css/Login.css";
import studentimg from "../../assets/studentimg.png";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const[loginform,setloginform]=useState({"email":"","password":""})

  const handleChange = (e) => {
    const { name, value } = e.target;

    setloginform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
        email: loginform.email,
        password: loginform.password,
        
      });
      if (response.data.User_found === true) {
        navigate("/dashboard");
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Login-MainContainer">
      <div className="Login-innercontainer">
        <h1>Smart Student</h1>
        <h1>Deadline Manager</h1>
        <img src={studentimg} alt="" className="Login-studentimg" />
        <div className="Login-formcontainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter Your password"
              name="password"
              onChange={handleChange}
            />
            <div className="Login-options">
              <label className="Login-Remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/signup">Sign up</Link>
            </div>
            <button type="submit">Login in</button>
            <a href="">Forgot password?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login