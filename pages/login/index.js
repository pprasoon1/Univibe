import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;

    if(name === "email"){
      setEmail(value);
    }
    else if(name === "password"){
      setPassword(value);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
  }

  return (
    <div>Login</div>
  )
}

export default Login