

import { Routes, Route } from "react-router-dom";
import React from 'react'

import Login from "./Login";
import Main from "./Main";
import Recommendation from "./Recommendation";
import About from "./About"



function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/recommendations" element={<Recommendation/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/main" element={<Main/>}/>
    </Routes>
    </>
  )
  }

  // reroute fetch calls via backend (build spotify controller)
  // render fetch to frontend
  // once i get data to display start building out front end

  //things to work on: logout function

export default App;

//need to check if user is already logged in