import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Login() { 
  return (
    <div>
      <h1>Welcome to Minify</h1>
      <br></br>
      <h2>Your Personal Music Recommender</h2>
      <Button href="#">REACT BOOTSTRAP TEST</Button>
      <Link to="//localhost:3000/login">Log in</Link>  
    </div>
  )
}
