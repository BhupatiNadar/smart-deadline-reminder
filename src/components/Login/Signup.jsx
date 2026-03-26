import React from 'react'
import { Link } from 'react-router-dom';
import "./css/Signup.css"
import studentimg from "../../assets/studentimg.png";

const Signup = () => {
  return (
    <div className="Signup-MainContainer">
      <div className="Signup-innercontainer">
        <h1>Smart Student</h1>
        <h1>Deadline Manager</h1>
        <img src={studentimg} alt="" className="Signup-studentimg" />
        <div className="Signup-formcontainer">
          <input type="text" placeholder="Enter Your email" />
          <input type="text" placeholder="Enter Your passward" />
          <input type="text" placeholder="ReEnter Your passward" />
          <div className="Signup-options">
            <label className="Signup-Remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/">Login her</Link>
          </div>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup