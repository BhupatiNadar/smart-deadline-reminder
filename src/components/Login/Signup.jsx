import React from 'react'
import { Link } from 'react-router-dom';
import "./css/Signup.css"
import studentimg from "../../assets/studentimg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [loginform, setloginform] = useState({ email: "", password: "",reenterpassword:""});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setloginform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginform.password !== loginform.reenterpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/signup", {
        email: loginform.email,
        password: loginform.password,
      });
      if ((response.data.Signup)== true){
         navigate("/")
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Signup-MainContainer">
      <div className="Signup-innercontainer">
        <h1>Smart Student</h1>
        <h1>Deadline Manager</h1>
        <img src={studentimg} alt="" className="Signup-studentimg" />
        <div className="Signup-formcontainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Enter Your passward"
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Re-enter Your passward"
              name="reenterpassword"
              onChange={handleChange}
            />
            <div className="Signup-options">
              <label className="Signup-Remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/">Login her</Link>
            </div>
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup