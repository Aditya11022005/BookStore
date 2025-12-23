import React from 'react'
import "./login.css"
import Image from "next/image";
import loginimg from "../images/pustakma.png";
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-img">
          <Image src={loginimg} alt="loginimage" className="loginimage"/>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form action="">
            <label htmlFor="username">Email</label><br />
            <input type="email" /><br />
            <span className='errormsg'>enter valid email</span> <br />
            <label htmlFor="password">Password</label><br />
            <input type="password" /><br />
            <span className='errormsg'>enter valid password</span> <br />
            <button type="submit">Login</button>
          </form>
          <div className="moreOptionforForm">
            <p>Don't have an account?<Link href="/auth/register"> Register</Link></p>
            <span>OR</span>
            <p><a href="/auth/forgotpassword">Forgot Password?</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage