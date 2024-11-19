import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/Auth-ForgotPasw2.css";

const ForgotPassword = () => {
    const otp1Ref = useRef(null);
    const otp2Ref = useRef(null);
    const otp3Ref = useRef(null);
    const otp4Ref = useRef(null);
    const otp5Ref = useRef(null);

    useEffect(() => {
        otp1Ref.current.focus();
    }, []);

    const moveNext = (current, nextRef) => {
        if (current.value.length === 1) {
            nextRef.current.focus();
        }
    };

    const backspace = (event, ref) => {
        if (event.key === 'Backspace' && ref.current.value.length === 0) {
            ref.current.previousElementSibling.focus();
        }
    };

    return (
        <div className="forgotpasw2">
            <div className="logo">GIGGLE'S</div>

            <div className="container">
                <h2>Check your email</h2>
                <p>We sent a reset link to your email, enter 4 digit code that mentioned in the email.</p>

                <div className="otp-container">
                    <input type="text" maxLength="1" className="otp-input" ref={otp1Ref} onInput={(e) => moveNext(e.target, otp2Ref)} onKeyDown={(e) => backspace(e, otp1Ref)} />
                    <input type="text" maxLength="1" className="otp-input" ref={otp2Ref} onInput={(e) => moveNext(e.target, otp3Ref)} onKeyDown={(e) => backspace(e, otp2Ref)} />
                    <input type="text" maxLength="1" className="otp-input" ref={otp3Ref} onInput={(e) => moveNext(e.target, otp4Ref)} onKeyDown={(e) => backspace(e, otp3Ref)} />
                    <input type="text" maxLength="1" className="otp-input" ref={otp4Ref} onInput={(e) => moveNext(e.target, otp5Ref)} onKeyDown={(e) => backspace(e, otp4Ref)} />
                    <input type="text" maxLength="1" className="otp-input" ref={otp5Ref} onKeyDown={(e) => backspace(e, otp5Ref)} />
                </div>

                <div className="center" style={{ textAlign: 'center', marginTop: '2%' }}>
                    <Link to="/forgotpasw3"><button className="regis"><b>Verify Code</b></button></Link><br /><br />

                    <p>Haven't got the email yet? &nbsp;<a href="Register.html">Resend Email</a></p>
                </div>

            </div>

        </div>
    );
}
export default ForgotPassword;
