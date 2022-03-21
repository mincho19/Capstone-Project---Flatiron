import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import { Button, Container } from 'react-bootstrap'
export default function Main() {
  

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
    document.body.style = "background: black"
  }

  return (
    <div>
      {resetBackground()}
      <NavBar/>
    <Container className = "duration_main">
      <Button variant="light" onClick = {() => handleClick("short_term")}>Short</Button> 
      <Button variant="light" onClick = {() => handleClick("medium_term")}>Medium</Button>
      <Button variant="light" onClick = {() => handleClick("long_term")}>Long</Button>
    </Container>
    </div>
  )
}
