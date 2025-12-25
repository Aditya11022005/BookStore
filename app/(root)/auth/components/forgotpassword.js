"use client";
import React, { useState } from "react";
import "./conponentsfile.css";

const ForgotPassword = () => {
return(
    <div>
        <div className="forgotpassword">
            <div className="container">
                <h2>Forgot Password</h2>
                <form>
                    <label htmlFor="email">New Password</label><br />
                    <input type="password" /><br />
                    <span className='errormsg'>enter valid password</span> <br />
                    <label htmlFor="email">Confirm Password</label><br />
                    <input type="password" /><br />
                    <span className='errormsg'>passwords do not match</span> <br />
                    <button type="submit">Reset Password</button>
                </form>
            </div>

        </div>
    </div>
)}

export default ForgotPassword;
