import axios from 'axios'
import { set } from 'mongoose'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Navbar from '@/components/Navbar/page'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "username") {
            setUsername(value)
        } else if (name === "email") {
            setEmail(value)
        }
        else if (name === "password") {
            setPassword(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

    if(!username || !email || !password) {
        toast.error('All fields are required')
        return;
    }
    try {
        
        const response = await axios.post('/api/auth/signup', {
                username,
                email,
                password
            
        });
        toast.success('Signup successful!')

        setUsername('')
        setEmail('')
        setPassword('')

    } catch (error) {
        toast.error(error.response?.data?.error || 'Signup failed. Please try again.');
    }
}



return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg w-full p-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Sign Up
                </button>
            </form>
            <p className="mt-4 text-center">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:underline">
                    Log in
                </Link>
            </p>
        </div>
    </div>
);
}

export default Signup