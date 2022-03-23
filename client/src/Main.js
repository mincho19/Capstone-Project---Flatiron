import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import SongList from './SongList';
import Graph from './Graph'
import { Button, Container } from 'react-bootstrap'

// PROJECT OVERVIEW

// NEED TO FINISH CREATING CHART, THEN CLEAN UP LOGIN PAGE

//PROCEED TO RECOMMENDATIONS FUNCTION - CREATE FOR MEDIUM TERM
//TABLE OF SONGS - SONG NAME, ARTIST, ALBUM ART, DURATION
//MODAM OF NEW SONGS

// CHART BY ATTRIBUTE

// SONG LIST

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

    fetch(`/spotify/top/tracks/medium_term/20`)
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
    // console.log(topSongsData)
  }

  function handleClickAttribute(param){
    //when attribute is clicked -> build graph from topSongs data
    //param shoud match the key in topSongs

    // lob up description of the attribute
  }

//NEED TO ADD IN ARTIST AND GENRE

  // function createRecommendations(topSongsData){
  //   fetch(`/spotify/recommendations/${artist_id}/${genre}/${song_id_1}/${song_id_2}/${song_id_3}/${t_acc}/${t_dan}/${t_dur}/${t_ene}/${t_ins}/${t_key}/${t_liv}/${t_lou}/${t_mod}/${t_pop}/${t_spe}/${t_tem}/${t_tim}/${t_val}`)
  //   .then((res) => res.json())
  //   .then((data) => setRecommendedSongs(data))
  
  // }

  function resetBackground(){
    document.body.style = "background: black"
    console.log('reloaded main')
  }

  return (
    <div>

      {resetBackground()}

      <NavBar/>
      {/* <Graph topSongsData = {topSongsData}/>
      <SongList topSongsData = {topSongsData}/> */}

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

    </div>
  )
}
