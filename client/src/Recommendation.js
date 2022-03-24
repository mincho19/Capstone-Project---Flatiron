import React, {useState, useEffect} from 'react'
import {Container } from 'react-bootstrap'
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

  function loadSongs(){
    if(user) {(user.songs).map(song  => {
      console.log(song['name'])
      console.log(song['preview_url'])
      console.log(song['duration'])
      console.log(song['album']['name'])
      console.log(song['album']['image_url'])
      console.log(song['album']['external_url'])
      console.log(song['artist']['name'])
      console.log(song['artist']['external_url'])
    })}
  }

  
  return (
    <div>
      <h1>Recommendations</h1>
      <Container>
        {loadSongs()}
      </Container>
    </div>
  )
}
