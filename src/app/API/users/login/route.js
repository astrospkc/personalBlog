import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import {connect } from "@/dbConfig/dbConfig"

import { NextRequest, NextResponse } from 'next/server';

import User from "@/models/UserModel"

export async function POST(req, res){
    try {
        const reqBody = await NextRequest.json();
        // destructuring username , email and password
        const{email, password}  = reqBody;
        const user =await User.findOne({email});

        if(!user){
            return NextResponse.json({error:"user does not exist"},{status:400} )
        }

        const validPassword = await bcrypt.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({
                error:"Invalid password"
            },{status:400})

        }

        // const token data
        const tokenData={
            id:user._id,
            username:user.username,
            email:user.email
        }
        
        // create token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1h"})
        
    } catch (error) {
        console.log("whhy this type of error");
        return NextResponse.json({
            error:error.messsage
        },
        {
            status:500
        })

       
    }

   

   

}


connect()