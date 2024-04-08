import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// import {connect} from "@dbConfig/dbConfig";
import {connect } from "@/dbConfig/dbConfig"

import { NextRequest, NextResponse } from 'next/server';

import User from "@/models/UserModel"

connect()

export async function POST(request){
    try {
        const reqBody = await request.json();
        // destructuring username , email and password
        const{username, email, password}  = reqBody;
        const user =await User.findOne({email});

        if(user){
            return NextResponse.json({error:"user already exist"},{status:400} )
        }

        // const salt = await bcrypt.genSalt(10);
        // const hashed = await bcrypt.hash(password, salt);
        console.log(reqBody);
        const newUser  = new User({
            username,
            email,
            // password:hashed
            password
        })
        
        const savedUser = await newUser.save();
        console.log(savedUser);
    
        return NextResponse.json({error:"User created successfully"},{status:201});
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


