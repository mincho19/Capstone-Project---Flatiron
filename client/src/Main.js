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

  function handleClick(time){
    fetchTopTracks(time, 20)
  }

  //HOW DO I DO IT WITH TWO PARAMS
  function fetchTopTracks(time, limit){
    fetch(`/spotify/top/tracks/${time}/${limit}`)
    .then((res) => res.json())
    .then((data) => setTopSongs(data));
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
  }

  return (
    <div>
      {setBackground()}
      <button onClick = {() => handleClick("short_term")}>Short</button>
      <button onClick = {() => handleClick("medium_term")}>Medium</button>
      <button onClick = {() => handleClick("long_term")}>Long</button>
    </div>
  )
}
