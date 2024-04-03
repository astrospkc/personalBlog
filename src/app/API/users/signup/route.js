import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {connect} from "@dbConfig/dbConfig.js"
import { NextRequest, NextResponse } from 'next/server';
import User from "@/app/models/UserModel.js"

export async function POST(request){
    try {
        const reqBody = await request.json();
        // destructuring username , email and password
        const{username, email, password}  = reqBody;
        const user =await User.findOne({email});

        if(user){
            return NextResponse.json({error:"user already exist"},{status:400} )
        }

        const salt = await bcryptjs.genSalt(10);
        const hashed = await bcryptjs.hash(password, salt);
        console.log(reqBody);
        
    } catch (error) {
        return NextResponse.json({
            error:error.messsage
        },
        {
            status:500
        })
    }

    const newUser  = new User({
        username,
        email,
        password:hashed
    })

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({error:"User created successfully"},{status:400});

}


connect()