import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import { Button, Container } from 'react-bootstrap'
export default function Main() {
  
  //FIRST BUILD OUT AVERAGE GRAPH
  //THEN MOVE ONTO ATTRIBUTES


  const [topSongs, setTopSongs] = useState('')
  const [user, setUser] = useState('')
  const [averageData, setAverageData] = useState({})

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleClickTerm(time){
    //fetch data, store in state
    fetchTopTracks(time, 20)
    
    //build graph, use time to determine title

   
    
  }

  function fetchTopTracks(time, limit){
    fetch(`/spotify/top/tracks/${time}/${limit}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  function handleClickAttribute(param){
    //when attribute is clicked -> build graph from topSongs data
    //param shoud match the key in topSongs

    // lob up description of the attribute
  }

  function resetBackground(){
    document.body.style = "background: black"
  }

  function buildGraph(data, title){
    //should take the name 
  }

  return (
    <div>
      {resetBackground()}
      <NavBar/>
    <Container className = "term_main">
      <Button className = "term_button" variant="light" onClick = {() => handleClickTerm("short_term")}>Short</Button> 
      <Button className = "term_button" variant="light" onClick = {() => handleClickTerm("medium_term")}>Medium</Button>
      <Button className = "term_button"variant="light" onClick = {() => handleClickTerm("long_term")}>Long</Button>
    </Container>


    {/* there might be a better alternative to a bunch of buttons */}
    <Container>
      <Button onClick = {() => handleClickAttribute("acousticness")}>Acoustiness</Button>
      <Button onClick = {() => handleClickAttribute("danceability")}>Danceability</Button>
      <Button onClick = {() => handleClickAttribute("energy")}>Energy</Button>
      <Button onClick = {() => handleClickAttribute("instrumentalness")}>Instrumentalness</Button>
      <Button onClick = {() => handleClickAttribute("key")}>Key</Button>
      <Button onClick = {() => handleClickAttribute("liveness")}>Liveness</Button>
      <Button onClick = {() => handleClickAttribute("loudness")}>Loudness</Button>
      <Button onClick = {() => handleClickAttribute("mode")}>Mode</Button>
      <Button onClick = {() => handleClickAttribute("speechiness")}>Speechiness</Button>
      <Button onClick = {() => handleClickAttribute("tempo")}>Tempo</Button>
      <Button onClick = {() => handleClickAttribute("time_signature")}>Time_Signature</Button>
      <Button onClick = {() => handleClickAttribute("valence")}>Valence</Button>
    </Container>

    <Container>
      {/* array that goes through and builds each song card */}
      {/* make a scrolly container */}
      {/* data that i need include: name, artist, image, preview url, metadata? */}
    </Container>

    </div>
  )
}
