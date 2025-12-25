import React from 'react'
import "./Register.css"
import Image from "next/image";
import loginimg from "../images/pustakma.png";
import Link from 'next/link';
import { WEBSITE_LOGIN } from '@/routes/WebsiteRoute';

const RegisterPage = () => {
  return (
    <div>
         <div className="login-container">
           <div className="login-img">
             <Image src={loginimg} alt="loginimage" className="loginimage"/>
           </div>
           <div className="login-form">
             <h2>Login</h2>
             <form action="">
              <label htmlFor="username">User Name</label><br />
                <input type="text" /><br />
                <span className='errormsg'>enter valid user name</span> <br />
              
               <label htmlFor="username">Email</label><br />
               <input type="email" /><br />
               <span className='errormsg'>enter valid email</span> <br />
               <label htmlFor="password">Password</label><br />
               <input type="password" /><br />
               <span className='errormsg'>enter valid password</span> <br />
               <button type="submit">Register</button>
             </form>
             <div className="moreOptionforForm">
               <p>You have an account?<Link href= {WEBSITE_LOGIN}> Login</Link></p>
             </div>
           </div>
         </div>
       </div>
  )
}

export default RegisterPage