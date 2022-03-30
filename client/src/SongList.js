import React from 'react'
import Song from './Song'
import {Container } from 'react-bootstrap'

export default function SongList({data, displayDetails}) {
  
  return (
    <Container>
      {console.log(data)}
        {
          
          data.map(song  => {
            return <Song
                key = {song['id']}
                songName = {song['name']}
                songURL = {song['external_url']}
                songPopularity = {song['popularity']}
                songPreview = {song['preview_url']}
                songDuration = {song['duration']}
                albumName = {song['album']['name']}
                albumImage = {song['album']['image_url']}
                albumURL = {song['album']['external_url']}
                artistName = {song['artist']['name']}
                artistURL = {song['artist']['external_url']}
                createdAt = {song['created_at']}
                displayDetails = {(obj) => displayDetails(obj)}
            />
          })
        }
    </Container>
 
  )
}
