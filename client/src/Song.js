import React from 'react'
import {Container } from 'react-bootstrap'


export default function Song(props) {
  

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

  function handleClick(songObject){
    props.displayDetails(songObject)
  }

// WANT TO PLAY BY HOVER
  
  return (
    <Container className = "songCard" onClick = {() => handleClick(props)}>
      <img  className = "recommendationsImage" src= {props.albumImage} alt = "No Album Cover Available"></img> 
      <h1 className = "songName">{props.songName} - {props.artistName}</h1>
      <h1 className = "songData">Added On: {props.createdAt} - Duration: {millisToMinutesAndSeconds(props.songDuration)}</h1>
    </Container>
  )
}