"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"
import Image from "next/image";
import img1 from "../../../public/img1.jpg";

export default function Signup(){
    const router = useRouter();
    const [user , setUser] = useState({
        email:"",
        password:"",
        username:""
    })

    const [buttonDisabled , setButtonDisabled] = useState(false);
    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        (user.username.length >0 && user.email.length>0 && user.password.length>0)?setButtonDisabled(true):setButtonDisabled(false); 
    })
    const onSignup  = async ()=>{
        try {
            setLoading(true);
            const response = await axios.post("/API/users/signup", user);
            console.log("getting response of the user details", response);
            router.push("/API/users/login");
        } catch (error) {
            console.log("error while adding details of the user ", error);
            // toast.error(error.message);
        } finally{
            setLoading(false);
        }
       
    }
    return (
        <div className="flex flex-col justify-center items-center m-auto">
            <h1 className="text-white my-5 text-3xl font-bold">Create Your New Account</h1>
            <div className="flex flex-row justify-between w-1/2 h-1/2 items-center m-auto">
            <div>
                <Image className="w-1/2 h-1/2" src={img1} alt="the default image attached to the signup page"/>
            </div>

        <div className="text-white flex flex-col ">
            <label htmlFor="usename" className="rounded-lg p-1" > username</label>
            <input className="rounded-lg p-1 text-black" type="text"
            id="name"
            typeof="username"
            value={user.username}
            placeholder="Username"
            onChange={(e)=>setUser({
                ...user, username:e.target.value
            })}
            
            />
            <label htmlFor="email" className="rounded-lg p-1" > email</label>
            <input
            className="rounded-lg p-1 text-black"
            type="text"
            id="email"
            typeof="email"
            value={user.email}
            placeholder="Email"
            onChange={(e)=>setUser({
                ...user, email:e.target.value
            })}
            
            />

<label htmlFor="password" className="rounded-lg p-1 "> password</label>
            <input type="password"
            className="rounded-lg p-1 text-black"
            id="pswd"
            typeof="password"
            value={user.password}
            placeholder="Password"
            onChange={(e)=>setUser({
                ...user, password:e.target.value
            })}
            
            />

            <button onClick={onSignup} className="text-black bg-blue-300 p-1 my-3 rounded-xl">
                {buttonDisabled?"SignUp":"No SignUp"}
                </button>
            <h1 className="text-white">Already have an account? <Link href="/login"><span>Login</span></Link></h1>
         
            

          
        </div>
        </div>
        </div>
    )
}
