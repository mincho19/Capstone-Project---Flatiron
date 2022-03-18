import React, {useState, useEffect} from 'react'

export default function Main() {
  
  //get user and stores

  const [topSongs, setTopSongs] = useState('')
  const [user, setUser] = useState('')

  var time;

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
      console.log(user)
    });
  }, [user]);

  function handleClickShort(){
    time = "short_term"
    fetchTopTracks(time);
    console.log(topSongs)
  }

  function handleClickMedium(){
    time = "medium"
    fetchTopTracks(time);
    console.log(topSongs)
  }

  function handleClickLong(){
    time = "long_term"
    fetchTopTracks(time);
    console.log(topSongs)
  }

  function fetchTopTracks(time){
    fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${time}&limit=20`, { 
      method: 'GET', 
      headers: new Headers({
          'Authorization': `Bearer ${user.access_token}`, 
          'Content-Type': 'application/json'
      })
      .then(resp => resp.json())
      .then(songList => setTopSongs(songList))
  });
  }


  return (
    <div>
      <button onClick = {handleClickShort}>Short</button>
      <button onClick = {handleClickMedium}>Medium</button>
      <button onClick = {handleClickLong}>Long</button>
    </div>
  )
}
