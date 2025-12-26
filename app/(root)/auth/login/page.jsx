"use client";
import React, { useState } from "react";
import "./login.css"
import Image from "next/image";
import loginimg from "../images/pustakma.png";
import Link from 'next/link';

import Spinner from '../../../../components/ui/SpinnerBadge';

const LoginPage = () => {
    const [isLoading,setLoading] = useState(false);

    const handleLogin = async(e) =>{
        e.preventDefault();
        setLoading(true);
        // here you will call login API
       await new Promise((r) => setTimeout(r, 2000));
        setLoading(false);
    }

  return (
    <div>
      <div className="login-container">
        <div className="login-img">
          <Image src={loginimg} alt="loginimage" className="loginimage"/>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Email</label><br />
            <input type="email" /><br />
            <span className='errormsg'>enter valid email</span> <br />
            <label htmlFor="password">Password</label><br />
            <input type="password" /><br />
            <span className='errormsg'>enter valid password</span> <br />
             {isLoading ? <Spinner /> : <button type="submit">Login</button>}
          </form>
          <div className="moreOptionforForm">
            <p>Don't have an account?<Link href="/auth/register"> Register</Link></p>
            <span>OR</span>
            <p><Link href="/auth/resetpassword">Forgot Password?</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage