"use client";
import React, { useState } from "react";
import "./Register.css"
import Image from "next/image";
import loginimg from "../images/pustakma.png";
import Link from 'next/link';
import SendOTP from '../components/SendOTP';
import Spinner from '../../../../components/ui/SpinnerBadge';

const RegisterPage = () => {
  
  const [showOTP, setShowOTP] = useState(false);
  const [isLoading,setLoading] = useState(false);

  const handleRegister = async(e) => {
    e.preventDefault();
    setLoading(true);
    // here you will call register API
   await new Promise((r) => setTimeout(r, 2000));
    setShowOTP(true); 
    setLoading(false);
  };

  return (
    <div>
         <div className={`login-container ${showOTP ? "blur-bg" : "100%"}`}>
           <div className="login-img">
             <Image src={loginimg} alt="loginimage" className="loginimage"/>
           </div>
           <div className="login-form">
             <h2>Login</h2>
             <form onSubmit={handleRegister}>
              <label htmlFor="username">User Name</label><br />
                <input type="text" /><br />
                <span className='errormsg'>enter valid user name</span> <br />
              
               <label htmlFor="username">Email</label><br />
               <input type="email" /><br />
               <span className='errormsg'>enter valid email</span> <br />
               <label htmlFor="password">Password</label><br />
               <input type="password" /><br />
               <span className='errormsg'>enter valid password</span> <br />
               {isLoading ? <Spinner /> : <button type="submit">Register</button>}

             </form>
             <div className="moreOptionforForm">
               <p>You have an account?<Link href="/auth/login"> Login</Link></p>
             </div>
           </div>
         </div>
             {showOTP && (
               <div className="otp-overlay">
                 <div className="otp-modal">
                   <SendOTP />
                 </div>
               </div>
             )}
       </div>
  )
}

export default RegisterPage