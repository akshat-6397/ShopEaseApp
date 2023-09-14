import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <img
          alt="loginImage"
          src="https://www.kindpng.com/picc/m/732-7329685_e-commerce-website-background-image-e-commerce-website.png"
        ></img>
        <div className="image-bottom">
          <h2>SignUp</h2>
          <div className="email">
            <label>First Name</label>
            <input type="text" placeholder="John" required />
          </div>
          <div className="email">
            <label>Last Name</label>
            <input type="text" placeholder="Doe" required />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="text" placeholder="abc@shopease.com" required/>
          </div>
          <div className="password">
            <label>Password</label>
            <input type={isPassVisible?'text':'password'} placeholder="Enter your Password" required/>
            {isPassVisible ? (
              <AiOutlineEyeInvisible
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "31px",
                  width: "20px",
                  height: "20px",
                  cursor: 'pointer',
                }}
                onClick={() => setIsPassVisible(!isPassVisible)}
              />
            ) : (
              <AiOutlineEye
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "31px",
                  width: "20px",
                  height: "20px",
                  cursor: 'pointer',
                }}
                onClick={() => setIsPassVisible(!isPassVisible)}
              />
            )}
          </div>
          <div className="password">
            <label>Confirm Password</label>
            <input type={isPassVisible?'text':'password'} placeholder="Enter your Password" required/>
            {isPassVisible ? (
              <AiOutlineEyeInvisible
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "31px",
                  width: "20px",
                  height: "20px",
                  cursor: 'pointer',
                }}
                onClick={() => setIsPassVisible(!isPassVisible)}
              />
            ) : (
              <AiOutlineEye
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "31px",
                  width: "20px",
                  height: "20px",
                  cursor: 'pointer',
                }}
                onClick={() => setIsPassVisible(!isPassVisible)}
              />
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button>Login</button>
          </div>
          <div className="bottom">
            <h5>Don't have an account?</h5>
            <span>
              <Link to="/signup" style={{ textDecoration: "none", color: '#0083b0' }}>
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;