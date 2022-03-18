import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export default function Login() { 
  return (
    <div>
      <h1>Welcome to Minify</h1>
      <br></br>
      <h2>Your Personal Music Recommender</h2>
      <Link to="//localhost:3000/login">Log in</Link>  
    </div>
  )
}
