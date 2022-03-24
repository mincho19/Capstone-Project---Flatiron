import React from 'react'
import {Container } from 'react-bootstrap'


export default function Song({songName, songPreview, songDuration, albumName, albumImage, albumURL, artistName, artistURL, createdAt}) {
  
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

// WANT TO PLAY BY HOVER
  
  return (
    <Container className = "songCard">
      <img  className = "recommendationsImage" src= {albumImage}></img> 
      <h1 className = "songName">{songName} - {artistName}</h1>
      <h1 className = "songData">Added On: {createdAt} - Duration: {millisToMinutesAndSeconds(songDuration)}</h1>
    </Container>
  )
}
