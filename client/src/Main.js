import React, {useState, useEffect} from 'react'

export default function Main() {
  
  //get user and stores

  const [topSongs, setTopSongs] = useState('')
  const [user, setUser] = useState('')

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

  function fetchTopTracks(time, limit){
    fetch(`/spotify/top/tracks/${time}/${limit}`)
    .then((res) => res.json())
    .then((data) => setTopSongs(data));
  }

  function resetBackground(){
    document.body.style = "background: white"
  }

  return (
    <div>
      {resetBackground()}
      <button onClick = {() => handleClick("short_term")}>Short</button>
      <button onClick = {() => handleClick("medium_term")}>Medium</button>
      <button onClick = {() => handleClick("long_term")}>Long</button>
    </div>
  )
}
