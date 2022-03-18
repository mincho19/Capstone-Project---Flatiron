

import { Routes, Route } from "react-router-dom";
import React, {useState} from 'react'

import Login from "./Login";
import Main from "./Main";



function App() {

  const[color, setColor] = useState('#12afed')

  function handleClick(newcolor){
    setColor(newcolor)
    document.body.style.backgroundColor = color;
    console.log(color)
  }

  return (
    <>
    {document.body.style.backgroundColor = color}
    {/* RENDER THE TOP NAV BAR HERE */}
    <Routes>
      <Route path="/login" onClick ={() => handleClick('24adef')} element={<Login/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
    </>
  )
  }

export default App;
