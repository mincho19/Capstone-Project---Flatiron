import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import Graph from './Graph';
import Carousel from './Carousel';
import Dropdown from './Dropdown';
import {Button, Container } from 'react-bootstrap'

const genres = [
  "acoustic",
  "afrobeat",
  "alt-rock",
  "alternative",
  "ambient",
  "anime",
  "black-metal",
  "bluegrass",
  "blues",
  "bossanova",
  "brazil",
  "breakbeat",
  "british",
  "cantopop",
  "chicago-house",
  "children",
  "chill",
  "classical",
  "club",
  "comedy",
  "country",
  "dance",
  "dancehall",
  "death-metal",
  "deep-house",
  "detroit-techno",
  "disco",
  "disney",
  "drum-and-bass",
  "dub",
  "dubstep",
  "edm",
  "electro",
  "electronic",
  "emo",
  "folk",
  "forro",
  "french",
  "funk",
  "garage",
  "german",
  "gospel",
  "goth",
  "grindcore",
  "groove",
  "grunge",
  "guitar",
  "happy",
  "hard-rock",
  "hardcore",
  "hardstyle",
  "heavy-metal",
  "hip-hop",
  "holidays",
  "honky-tonk",
  "house",
  "idm",
  "indian",
  "indie",
  "indie-pop",
  "industrial",
  "iranian",
  "j-dance",
  "j-idol",
  "j-pop",
  "j-rock",
  "jazz",
  "k-pop",
  "kids",
  "latin",
  "latino",
  "malay",
  "mandopop",
  "metal",
  "metal-misc",
  "metalcore",
  "minimal-techno",
  "movies",
  "mpb",
  "new-age",
  "new-release",
  "opera",
  "pagode",
  "party",
  "philippines-opm",
  "piano",
  "pop",
  "pop-film",
  "post-dubstep",
  "power-pop",
  "progressive-house",
  "psych-rock",
  "punk",
  "punk-rock",
  "r-n-b",
  "rainy-day",
  "reggae",
  "reggaeton",
  "road-trip",
  "rock",
  "rock-n-roll",
  "rockabilly",
  "romance",
  "sad",
  "salsa",
  "samba",
  "sertanejo",
  "show-tunes",
  "singer-songwriter",
  "ska",
  "sleep",
  "songwriter",
  "soul",
  "soundtracks",
  "spanish",
  "study",
  "summer",
  "swedish",
  "synth-pop",
  "tango",
  "techno",
  "trance",
  "trip-hop",
  "turkish",
  "work-out",
  "world-music"
]

//fix song album art bug
//set navigation
//clean up regetting tokens

//clean up recommendations page
//clean up about

//webplayback

export default function Main() {

  const [topSongsData, setTopSongsData] = useState('')
  const [recommendedSongs, setRecommendedSongs] = useState([])
  const [graphSongData, setGraphSongData] = useState()
  const [termGraph, setTermGraph] = useState(true)
  const [term, setTerm] = useState("Medium")
  const [genre, setGenre] = useState('pop')

  useEffect(() => {

    const time = "medium_term"
    const limit = 20

    fetch(`/spotify/top/tracks/${time}/${limit}`)
      .then((res) => res.json())
      .then((data) => setTopSongsData(data))
  }, []);

  function handleClickTerm(time) {

    if (time === "short_term"){
      setTerm("Short Term ~ 4 Weeks")
    }
    else if (time === "medium_term"){
      setTerm("Medium Term ~ 6 Months")
    }
    else setTerm("Long Term ~ Few Years")

    fetchTopTracks(time, 20)
    setTermGraph(true)

  }

  function fetchTopTracks(time, limit) {
    fetch(`/spotify/top/tracks/${time}/${limit}`)
      .then((res) => res.json())
      .then((data) => setTopSongsData(data))
  }

  function buildSongObjectArray(topSongsData) {
    const songArray = [];
    for (var i = 0; i < (topSongsData.song_id_array.length); i++) {
      const song = {
        id: topSongsData.song_id_array[i],
        name: topSongsData.song_name_array[i],
        artist: topSongsData.artist_name_array[i],
        picture: topSongsData.album_image_array[i],
        average_acousticness: topSongsData.acousticness_array[i],
        average_danceability: topSongsData.danceability_array[i],
        average_energy: topSongsData.energy_array[i],
        average_instrumentalness: topSongsData.instrumentalness_array[i],
        average_liveness: topSongsData.liveness_array[i],
        average_mode: topSongsData.mode_array[i],
        average_speechiness: topSongsData.speechiness_array[i],
        average_valence: topSongsData.valence_array[i]
      }
      songArray.push(song)
    }
    return songArray
  }

  function handleClickSong(song) {
    setTermGraph(false)
    setGraphSongData(song)
  }

  function handleClickRecommendations(data) {
    fetch(`/spotify/recommendations?artist=${data['artist_id_array'][0]}&genre=${genre}&song_1=${data['song_id_array'][0]}&song_2${data['song_id_array'][1]}&song_3=${data['song_id_array'][2]}&acc=${data['average_acousticness']}&dan=${data['average_danceability']}&ene=${data['average_energy']}&ins=${data['average_instrumentalness']}&key=${data['average_key']}&liv=${data['average_liveness']}&lou=${data['average_loudness']}&mod=${data['average_mode']}&spe=${data['average_speechiness']}&tem=${data['average_tempo']}&tim=${data['average_time_signature']}&val=${data['average_valence']}`)
      .then((res) => res.json())
      .then((result) => setRecommendedSongs(result))
  }

  function resetBackground() {
    document.body.style = "background: black"
  }

  return (
    <div>

      {resetBackground()}
      <NavBar className="navBar" />
      <div className="mainContainer">
        <div className="songColumn">
          <h1>Your Top Songs...</h1>
          {topSongsData ?
            (buildSongObjectArray(topSongsData).map(song =>
              <div key={song.id} className="songMainContainer" onClick={() => handleClickSong(song)}>
                <img src={song.picture} alt="No Album Cover" width="20" height="20"></img>
                <div className="songMainText">{song.name} - {song.artist}</div>
              </div>))
            : (<h2>Loading...</h2>)}
          
        </div>

        <div className="graphColumn">

          {termGraph 
            ? <Graph className = "graph" caption = "Average User Data by Metric" subCaption = {term} topSongsData={topSongsData} />
            : <Graph className = "graph" caption = "Song Data by Metric" subCaption = {graphSongData.name} topSongsData={graphSongData} />
          }

          <Container className="term_main">
            <Button className="term_button" variant="light" onClick={() => handleClickTerm("short_term")}>Short</Button>
            <Button className="term_button" variant="light" onClick={() => handleClickTerm("medium_term")}>Medium</Button>
            <Button className="term_button" variant="light" onClick={() => handleClickTerm("long_term")}>Long</Button>
            <Button className="term_button" onClick={() => handleClickRecommendations(topSongsData)}>Get Recommendations</Button>
            {/* <Dropdown  genres = {genres} setGenre = {() => setGenre}/> */}
          </Container>
        </div>

        <div className = "recommendationColumn">
          <Carousel className = "carousel" recommendedsongsarray = {recommendedSongs}/>
        </div>

      </div>
    </div>
  )
}