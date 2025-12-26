"use client";
import React, { useState } from "react";
import "../components/conponentsfile.css";
import Spinner from '../../../../components/ui/SpinnerBadge';


const ForgotPassword = () => {
    const [showSetPassword, setShowSetPassword] = useState(false);
    const [isLoading,setLoading] = useState(false);

    const handlesetPassword = async(e) => {
        setLoading(true);
     // here you will call setpassword API
       await new Promise((r) => setTimeout(r, 2000));
       setLoading(false);
    }

return(
    <div>
        <div className="forgotpassword">

            <div className="container">
                <h2>Forgot Password</h2>
                <form className="setpaaform" onSubmit={handlesetPassword}>
                    <label htmlFor="email">New Password</label><br />
                    <input type="password" /><br />
                    <span className='errormsg'>enter valid password</span> <br />
                    <label htmlFor="email">Confirm Password</label><br />
                    <input type="password" /><br />
                    <span className='errormsg'>passwords do not match</span> <br />
                     {isLoading ? <Spinner /> : <button type="submit">Reset Password</button>}
                </form>
            </div>

        </div>
    </div>
)}

export default ForgotPassword;
