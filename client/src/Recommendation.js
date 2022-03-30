import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import SongList from './SongList';
import WebPlayback from './WebPlayback'


export default function Recommendation() {
  
  const [user, setUser] = useState('')
  const [displaySong, setDisplaySong] = useState('')
  const [currentAudio, setCurrentAudio] = useState('')

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

  function displayDetails(obj){
    setDisplaySong(obj)
    var audio = new Audio(obj.songPreview);
    audio.play();
  }
  
  return (

    <>
      {resetBackground()}
      <NavBar/>
      <div className = "recommendationsContainer">
        <div className = "recommendationsList">
        {user 
        ? (<>
          <SongList data = {user.songs} displayDetails = {(obj) => displayDetails(obj)}/>
          {/* <WebPlayback token = {user.access_token}/> */}
          </>) 
        : (<h2>Loading...</h2>)}
        </div>
        <div className = "recommendationsCard">
          <img src = {displaySong.albumImage} className = "recommendationsCardImage"></img>
          <h1> {displaySong.artistName} </h1>
          <h1> {displaySong.albumName}</h1>
        </div>
      </div>
    </>
  )
}