import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import SongList from './SongList';

export default function Recommendation() {
  
  const [user, setUser] = useState('')

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // I WANT TO EVENTUALLY INCORPORATE WEB PLAYER SDK

  
  return (

    <>
      <NavBar/>
      <div className = "recommendationsList">
        {user ? (<SongList data = {user.songs}/>) : (<h2>Loading...</h2>)}
      </div>
    </>
  )
}
