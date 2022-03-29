import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import SongList from './SongList';
import WebPlayback from './WebPlayback'


export default function Recommendation() {
  
  const [user, setUser] = useState('')



  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function resetBackground() {
    document.body.style = "background: black"
  }

  // I WANT TO EVENTUALLY INCORPORATE WEB PLAYER SDK

  
  return (

    <>
      {resetBackground()}
      <NavBar/>
      <div className = "recommendationsList">
        {user 
        ? (<>
          <SongList data = {user.songs}/>
          {/* <WebPlayback token = {user.access_token}/> */}
          </>) 
        : (<h2>Loading...</h2>)}
      </div>
    </>
  )
}