import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Auth-ForgotPasw3.css';

function ForgotPasw3() {
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
        <div className="forgotpasw3">
            <div className="logo">GIGGLE'S</div>

            <div className="container">
                <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <h2>Reset a New Password</h2>
                    <p>Choose a new password</p>
                </div>
                
                <div className="Password">
                    <h6>Password</h6>
                    <i className="bi bi-lock" style={{fontSize: '24px', marginRight: '3%', marginLeft: '0.4%'}}></i> 
                    <input type={passwordVisible ? 'text' : 'password'} placeholder="Enter your password" id="password" />
                    <i className={passwordVisible ? 'bi bi-eye' : 'bi bi-eye-slash'} style={{position: 'absolute', right: '8%', marginRight: '10px', cursor: 'pointer'}} onClick={togglePasswordVisibility}></i>
                    <br /><div className="garis"></div>
                </div> 

                <div className="ConfirmPassword">
                    <h6>Confirm Password</h6>
                    <i className="bi bi-lock" style={{fontSize: '24px', marginRight: '3%', marginLeft: '0.4%'}}></i> 
                    <input type={confirmPasswordVisible ? 'text' : 'password'} placeholder="Confirm your password" id="confirmPassword" />
                    <i className={confirmPasswordVisible ? 'bi bi-eye' : 'bi bi-eye-slash'} style={{position: 'absolute', right: '8%', marginRight: '10px', cursor: 'pointer'}} onClick={toggleConfirmPasswordVisibility}></i>
                    <br /><div className="garis"></div>
                </div>
                        
                <div className="center" style={{textAlign: 'center', marginTop: '2%'}}>
                    <button className="regis" onClick={handleRegisterClick}><b>Continue</b></button><br /><br />
                </div>

                
            </div>
            {overlayVisible && (
                    <div className="bgOverlay" style={{zIndex: '1000', display: 'block'}}>
                        <div className="containerOverlay center">
                            <h2>Successfull!</h2>
                            <p>Congratulations, your password has been changed. <br /> Click continue to login.</p>

                            <Link to="/login"><button>Continue</button></Link>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default ForgotPasw3;


