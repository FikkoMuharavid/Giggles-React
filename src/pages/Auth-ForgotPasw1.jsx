import React from 'react';
import "../styles/Auth-ForgotPasw1.css";

const ForgotPassword = () => {
    return (
        <div className="forgotpasw1">
            <div className="logo">GIGGLE'S</div>

            <div className="container">
                <h2>Forgot Password</h2>
                <p>enter your email to reset password</p>

                <div className="email">
                    <h6>Email</h6>
                    <i className="bi bi-envelope" style={{ fontSize: '24px', marginRight: '3%', marginLeft: '0.4%' }}></i> <input type="text" placeholder="Enter your email addres" /> <br /> <div className="garis"></div>
                </div>

                <div className="center" style={{ textAlign: 'center', marginTop: '2%' }}>
                    <a href="ForgotPasw2.html"><button className="regis"><b>Continue</b></button></a><br /><br />
                </div>

            </div>

        </div>
    );
}

export default ForgotPassword;
