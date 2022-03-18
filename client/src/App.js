
import Login from "./Login";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import React, {useState} from 'react'


function App() {

  const[color, setColor] = useState(195,123,213)

  function changeColor(color){
    setColor(color)
  }

  return (
    
  <div style = {{background: color}}>
    {/* RENDER THE TOP NAV BAR HERE */}
    <Routes>
      <Route path="/login" onClick ={() => changeColor(195,123,213)} element={<Login/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
  </div>
  )
  }

export default App;
