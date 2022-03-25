import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Button } from 'react-bootstrap'

export default function Login() { 
  return (
    <div className = "login">
      <h1 className = "login_title">Welcome to Minify</h1>
      <p className = "login_subtitle">Your Personal Music Recommender</p>
      <Button href="//localhost:3000/login">Get Started</Button>  
    </div>
  )
}
