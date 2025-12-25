"use client"
import React, { useState } from "react";
import "./conponentsfile.css";
import Spinner from '../../../../components/ui/SpinnerBadge';

const SendOTP = () => {
    const [emailAuth, setEmailAuth] = React.useState(false);
    const [otpAuth, setOtpAuth] = React.useState(false);
    const [isLoading,setLoading] = useState(false);

    const handleSendOTP = (e) => {
        e.preventDefault();
        setLoading(true);
        // here you will call send OTP API
        setTimeout(() => {
            setEmailAuth(true);
            setLoading(false);
        }, 2000);
    }

    const handleVerifyOTP = (e) => {
      e.preventDefault();
       setLoading(true);
      // verify OTP logic

       setTimeout(() => {
            setEmailAuth(true);
            setLoading(false);
        }, 2000);
      console.log("OTP verified");
      window.location.reload();
    };

  return (
    <div className="otp-wrapper">
        <div className="otp-container">
        {!emailAuth && (  
          <div className="emailAuth">
            <h2>Send OTP</h2>
            <form onSubmit={handleSendOTP}>
              <label htmlFor="email">Email</label><br />
                <input type="email" /><br />
                <span className='errormsg'>enter valid email</span> <br />
               {isLoading ? <Spinner /> : <button type="submit">Send OTP</button>}
             </form>
          </div>
        )}
        {emailAuth &&
          <div className="otpAuth">
            <h2>Verify OTP</h2>
            <form onSubmit={handleVerifyOTP}>
              <label htmlFor="otp">Enter OTP</label><br />
                <input type="text" /><br />
                <span className='errormsg'>enter valid otp</span> <br />
               {isLoading ? <Spinner /> : <button type="submit">Verify OTP</button>}
            </form>
          </div>
     }
        </div>
    </div>
  )
}

export default SendOTP