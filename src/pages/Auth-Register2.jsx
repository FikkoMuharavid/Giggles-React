import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth-Register2.css";

const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();
    setOverlayVisible(true);
  };

  return (
    <div className="register2">
      <div className="logo">GIGGLE'S</div>

      <div className="container">
        <h2>Sign Up</h2>
        <p>
          If you already have an account register <br /> You can{" "}
          <Link to="/login">&nbsp;Login Here !</Link>
        </p>

        <div className="email">
          <h6>Email</h6>
          <i
            className="bi bi-envelope"
            style={{ fontSize: "24px", marginRight: "3%", marginLeft: "0.4%" }}
          ></i>
          <input type="text" placeholder="Enter your email address" />
          <br />
          <div className="garis"></div>
        </div>

        <div className="username">
          <h6>Username</h6>
          <i
            className="bi bi-person"
            style={{ fontSize: "24px", marginRight: "3%", marginLeft: "0.4%" }}
          ></i>
          <input type="text" placeholder="Enter your username" />
          <br />
          <div className="garis"></div>
        </div>

        <div className="Password">
          <h6>Password</h6>
          <i
            className="bi bi-lock"
            style={{ fontSize: "24px", marginRight: "3%", marginLeft: "0.4%" }}
          ></i>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
          />
          <i
            className={`bi ${passwordVisible ? "bi-eye" : "bi-eye-slash"}`}
            style={{
              position: "absolute",
              right: "8%",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          ></i>
          <br />
          <div className="garis"></div>
        </div>

        <div className="ConfirmPassword">
          <h6>Confirm Password</h6>
          <i
            className="bi bi-lock"
            style={{ fontSize: "24px", marginRight: "3%", marginLeft: "0.4%" }}
          ></i>
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm your password"
          />
          <i
            className={`bi ${
              confirmPasswordVisible ? "bi-eye" : "bi-eye-slash"
            }`}
            style={{
              position: "absolute",
              right: "8%",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={toggleConfirmPasswordVisibility}
          ></i>
          <br />
          <div className="garis"></div>
        </div>

        <div
          className="center"
          style={{ textAlign: "center", marginTop: "2%" }}
        >
          <button className="regis" onClick={handleRegisterClick}>
            <b>Register</b>
          </button>
          <br />
          <br />
        </div>
      </div>
      {overlayVisible && (
        <div id="overlay" className="bgOverlay">
          <div className="containerOverlay center">
            <h2>Registration Successful!</h2>
            <p>
              Congratulations, your account has been <br /> Successfully created
            </p>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
