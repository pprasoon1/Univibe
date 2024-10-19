import connectDB from "@/lib/config/db";
import User from "@/lib/config/models/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


connectDB();
export async function POST(req) {
    try {
        
        const {username, password} = await req.json();

        if(!username || !password){
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            )
        }

        const user = await User.findOne({username});
        
        if(!user){
            return NextResponse.json(
                {error: "Invalid credentials"},
                {status: 401}
            );
        }

        if (user.password !== password){
            return NextResponse.json(
                {error: "Invalid credentials"},
                {status: "401"}
            )
        }

        const token = jwt.sign({
            email: user.email,
            id: user._id,   
        },process.env.JWT_SECRET,
    { expiresIn: "15d",}
)

        return NextResponse.json({
            message: "Login successful",
            token: token
          },
        {status: 200}
        );

    } catch (error) {
        console.log("Login error", error);
        return NextResponse.json(
            { error: "Error in login route" }, 
            { status: 500 }
        );
        
    }
}