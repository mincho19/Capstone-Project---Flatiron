import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import SongList from './SongList';
import Graph from './Graph'
import { Button, Container } from 'react-bootstrap'

// PROJECT OVERVIEW

// NEED TO FINISH CREATING CHART, THEN CLEAN UP LOGIN PAGE

//NEED TO FIGURE OUT HOW TO SIGN OUT USER

export default function Main() {

  const [topSongsData, setTopSongsData] = useState('')
  const [user, setUser] = useState('')
  const [recommendedSongs, setRecommendedSongs] = useState([])

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });

    const time = "medium_term"
    const limit = 20

    fetch(`/spotify/top/tracks/${time}/${limit}`)
    .then((res) => res.json())
    .then((data) => setTopSongsData(data))
    
  }, []);

  function handleClickTerm(time){
    fetchTopTracks(time, 20)
  }

  function fetchTopTracks(time, limit){
    fetch(`/spotify/top/tracks/${time}/${limit}`)
    .then((res) => res.json())
    .then((data) => setTopSongsData(data))
  }

  function handleClickAttribute(param){
    //when attribute is clicked -> build graph from topSongs data
    //param shoud match the key in topSongs

    // lob up description of the attribute
  }

  function handleClickRecommendations(data){
    const genre = "pop"
    fetch(`/spotify/recommendations?artist=${data['artist_id_array'][0]}&genre=${genre}&song_1=${data['song_id_array'][0]}&song_2${data['song_id_array'][1]}&song_3=${data['song_id_array'][2]}&acc=${data['average_acousticness']}&dan=${data['average_danceability']}&ene=${data['average_energy']}&ins=${data['average_instrumentalness']}&key=${data['average_key']}&liv=${data['average_liveness']}&lou=${data['average_loudness']}&mod=${data['average_mode']}&spe=${data['average_speechiness']}&tem=${data['average_tempo']}&tim=${data['average_time_signature']}&val=${data['average_valence']}`)
    .then((res) => res.json())
    .then((result) => setRecommendedSongs(result))
  }

  function resetBackground(){
    document.body.style = "background: black"
    console.log('reloaded main')
  }

  return (
    <div>

      {resetBackground()}

      <NavBar/>
      <Container className = "songListMain">
        {topSongsData ? ((topSongsData.song_name_array).map(name => <Container key = {name} className = "songMain">{name}</Container>)) : (<h2>Loading...</h2>)}
      </Container>
      <Container className = "term_main">
        <Button className = "term_button" variant="light" onClick = {() => handleClickTerm("short_term")}>Short</Button> 
        <Button className = "term_button" variant="light" onClick = {() => handleClickTerm("medium_term")}>Medium</Button>
        <Button className = "term_button"variant="light" onClick = {() => handleClickTerm("long_term")}>Long</Button>
      </Container>

      

      <Button onClick = {() => handleClickRecommendations(topSongsData)}>Get Recommendations</Button>

    </div>
  )
}

{/* <Container>
        <Button onClick = {() => handleClickAttribute("acousticness")}>Acousticness</Button>
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
      </Container> */}