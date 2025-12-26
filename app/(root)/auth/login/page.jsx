<<<<<<< HEAD
'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import loginimg from "../images/pustakma.png"
import { zSchema } from "@/lib/zodSchema"
import { WEBSITE_REGISTER, WEBSITE_RESETPASSWORD } from "@/routes/WebsiteRoute"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import z from "zod"
=======
"use client";
import React, { useState } from "react";
import "./login.css"
import Image from "next/image";
import loginimg from "../images/pustakma.png";
import Link from 'next/link';
>>>>>>> c2040d55880059f3c58ebebd61fe212ce9fe1bb4

import Spinner from '../../../../components/ui/SpinnerBadge';

const LoginPage = () => {
<<<<<<< HEAD

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const formSchema = zSchema.pick({
    email: true,
  }).extend({
    password :z.string().min(3, "Password field must be required"),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const handleLoginSubmit = async (data) =>{

    console.log("Login Data:", data)
  }
 

  return (
    <div className="min-h-screen flex">

      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white">
        <Image src={loginimg} alt="Pustak Maza" className="max-w-md" />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 bg-[#fff1f1] flex items-center justify-center">
        <div className="w-full max-w-md px-10">

          <h2 className="text-3xl font-semibold text-center mb-8">
            Login
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLoginSubmit)} className="space-y-6">

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="rounded-full h-12"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* Password with Show/Hide */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          className="rounded-full h-12 pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* Forgot Password */}
              <div className="text-right text-sm">
                <Link
                  href={WEBSITE_RESETPASSWORD}
                  className="text-purple-700 font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button with Loader */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full h-12 bg-purple-700 hover:bg-purple-800 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>

          <p className="text-center mt-6 text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href={WEBSITE_REGISTER}
              className="text-purple-700 font-semibold"
            >
              Register
            </Link>
          </p>

=======
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
>>>>>>> c2040d55880059f3c58ebebd61fe212ce9fe1bb4
        </div>
      </div>
    </div>
  )
}

export default LoginPage
