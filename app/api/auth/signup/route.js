import connectDB from "@/lib/config/db";
import User from "@/lib/config/models/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


connectDB();

export async function POST(req) {
    try {
        const { username, email, password } = await req.json(); 

        const existingUser = await User.findOne({email});

        if(existingUser){
            return NextResponse.json(
                {error: "User already exists"},
                {status: 400})
        }

        if (!username || !email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const newUser = new User({
            username,
            email,
            password,
        });

        await newUser.save();

        const token = jwt.sign({
            email: newUser.email,
            id: newUser._id,
        }, "pprasoon", 
            {expiresIn: "15d" }
        )

        return NextResponse.json(
            { 
                message: "User created successfully",
                token: token,
            },
            { status: 201 }
        );
       
        
        
        

    } catch (error) {
        console.error(error); 
        return NextResponse.json(
            { error: "Error in signup route" }, 
            { status: 500 }
        );
    }
}
