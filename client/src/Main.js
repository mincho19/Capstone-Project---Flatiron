import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import Graph from './Graph'
import { Button, Container } from 'react-bootstrap'

//clean up main

//build about page

//refresh token

//additional
//metric by song
//play song in recommendations

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

  function handleClickTerm(time) {
    fetchTopTracks(time, 20)
  }

  function fetchTopTracks(time, limit) {
    fetch(`/spotify/top/tracks/${time}/${limit}`)
      .then((res) => res.json())
      .then((data) => setTopSongsData(data))
  }

  function buildSongArray(topSongsData) {
    const songArray = [];
    for (var i = 0; i < (topSongsData.song_id_array.length); i++) {
      const song = {
        id: topSongsData.song_id_array[i],
        name: topSongsData.song_name_array[i],
        artist: topSongsData.artist_name_array[i],
        picture: topSongsData.album_image_array[i]
      }
      songArray.push(song)
    }
    return songArray
  }

  function handleClickSong(song) {

  }

  function handleClickRecommendations(data) {
    const genre = "pop"
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
        <div className="songListMain">
          <h1>Your Top Songs...</h1>
          {topSongsData ?
            (buildSongArray(topSongsData).map(song =>
              <div key={song.id} className="songMainContainer" onClick={handleClickSong(song)}>
                <img size src={song.picture} alt="No Album Cover" width="20" height="20"></img>
                <div className="songMainText">{song.name} - {song.artist}</div>
              </div>))
            : (<h2>Loading...</h2>)}

          <Button className="getRecommendationsMain" onClick={() => handleClickRecommendations(topSongsData)}>Get Recommendations</Button>
        </div>

        <div className="graphColumn">
          <Graph className="graph" topSongsData={topSongsData} />

          <Container className="term_main">
            <Button className="term_button" variant="light" onClick={() => handleClickTerm("short_term")}>Short</Button>
            <Button className="term_button" variant="light" onClick={() => handleClickTerm("medium_term")}>Medium</Button>
            <Button className="term_button" variant="light" onClick={() => handleClickTerm("long_term")}>Long</Button>
          </Container>
        </div>
      </div>
    </div>
  )
}

