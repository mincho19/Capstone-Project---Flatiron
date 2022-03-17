
import Login from "./Login";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";


function App() {


  return (

    // RENDER THE TOP NAV BAR HERE
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/main" element={<Main/>}/>
  </Routes>
  )

  

  }

export default App;
