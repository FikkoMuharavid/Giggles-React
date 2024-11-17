import React, { useState } from "react";
import "../styles/Login.css";
import "../styles/App.css";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="pagelogin">
        <div className="logoauth">GIGGLE'S</div>
        <div className="container">
          <h2 style={{ paddingBottom: "2%", textAlign: "left" }}>Sign In</h2>
          <p>
            If you don’t have an account register <br /> You can{" "}
            <a href="Register.html">&nbsp;Register Here !</a>
          </p>

          <div className="email">
            <h6>Email</h6>
            <i
              className="bi bi-envelope"
              style={{
                fontSize: "24px",
                marginRight: "3%",
                marginLeft: "0.4%",
              }}
            ></i>{" "}
            <input type="text" placeholder="Enter your email addres" /> <br />{" "}
            <div className="garis"></div>
          </div>

          <div className="Password">
            <h6>Password</h6>
            <i
              className="bi bi-lock"
              style={{
                fontSize: "24px",
                marginRight: "3%",
                marginLeft: "0.4%",
              }}
            ></i>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Enter your password"
              id="password"
            />
            <i
              className="bi bi-eye-slash"
              style={{
                position: "absolute",
                right: "8%",
                marginRight: "10px",
                cursor: "pointer",
              }}
              id="togglePassword"
              onClick={togglePassword}
            ></i>
            <br /> <div className="garis"></div>
          </div>

          <label className="custom-checkbox">
            <input type="checkbox" name="option3" />
            <span className="checkmark"></span>
            Remember Me
            <a href="ForgotPasw.html" style={{ marginLeft: "auto" }}>
              Forgot Password ?
            </a>
          </label>

          <div className="center" style={{ textAlign: "center" }}>
            <a href="">
              <button>
                <b>Login</b>
              </button>
            </a>
            <br />
            <br />
            <div
              className="text-with-lines"
              style={{
                paddingLeft: "4%",
                paddingRight: "4%",
                marginBottom: "2%",
              }}
            >
              or do it via other accounts
            </div>
            <div className="icon-circle">
              <i
                className="bi bi-google"
                style={{ fontSize: "28px", color: "rgba(0, 0, 0, 0.726)" }}
              ></i>
            </div>
            <div className="icon-circle">
              <i
                className="bi bi-apple"
                style={{ fontSize: "30px", color: "rgba(0, 0, 0, 0.726)" }}
              ></i>
            </div>
            <div className="icon-circle">
              <i
                className="bi bi-facebook"
                style={{ fontSize: "34px", color: "rgba(0, 0, 0, 0.726)" }}
              ></i>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
