import React, {useState, useEffect} from 'react'

export default function Main() {
  
  //get user and stores

  const [topSongs, setTopSongs] = useState('')
  const [user, setUser] = useState('')

  var time;
  var songs;

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleClickShort(){
    time = "short_term"
    songs =fetchTopTracks(time);
    console.log(user)
  }

  function handleClickMedium(){
    time = "medium"
    songs = fetchTopTracks(time);
    console.log(user.access_token)
  }

  function handleClickLong(){
    time = "long_term"
    songs = fetchTopTracks(time);
    console.log(user)
  }

  //need to finsh fetch function w correct params then create controller method to render backend response
  function fetchTopTracks(time){
    fetch('/spotify/toptracks',{
      method
    })
  }

  // function fetchTopTracks(time){
  //   fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${time}&limit=20`, { 
  //     method: 'GET',
       
  //     headers: {
  //         Authentication: `Bearer ${user.access_token}`, 
  //         'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(resp => {resp.json()})
  //     .then(songList => setTopSongs(songList))
  // }

  function setBackground(){
    document.body.style = "background: white"
    console.log("white")
  }

  // need to reroute request to backend


  return (
    <div>
      {setBackground()}
      <button onClick = {handleClickShort}>Short</button>
      <button onClick = {handleClickMedium}>Medium</button>
      <button onClick = {handleClickLong}>Long</button>
    </div>
  )
}
