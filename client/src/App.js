

import { Routes, Route } from "react-router-dom";
import React, {useState} from 'react'

import Login from "./Login";
import Main from "./Main";



function App() {

  return (
    <>

    {/* RENDER THE TOP NAV BAR HERE */}
    <Routes>
      <Route path="/login" element={<Login/>}/>
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
