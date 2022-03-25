import React from 'react'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap'

export default function About() {
  function resetBackground(){
    document.body.style = "background: black"
  }

  return (
    
    <div>
      {document.body.style = "background: black"}
      <NavBar/>
      <Container>
        <div>Personalization services at Spotify rely on learning meaningful representations of tracks and users to surface apt recommendations to users in a number of different use cases. When learning track representations, one can leverage various types of heterogeneous information encoded in music data to benefit downstream recommendation tasks: </div>
        <br></br>
        <ul>
          <li > organizational information: tracks organized into playlists; </li>
          <li> content information: audio and acoustic features extracted from tracks;</li>
          <li> musical stylistics: musical domain characteristics like music genres.</li>
        </ul>
        
        We developed MUSIG, a multi-task formulation of graph representation learning to learn track representations based on both content features and structural graph neighborhoods. Our model is trained on multiple tasks (playlist co-occurrence, acoustic similarity and genre prediction), which enables the generalizability of the learned embeddings on downstream tasks.
        <br></br>
        We evaluated MUSIG on a music dataset representing tracks and playlists from Spotify, from a collection of over 95K playlists. Our experiments showed that our graph-based approach has numerous advantages:
        <br></br>
        <ul>
          <li> Allows us to aggregate graph structure and node features, encoding two sources of complementary information; </li>
          <li> Enables specifying different types of relations or nodes, to allow for embeddings which generalize across multiple downstream tasks;</li>
          <li> Is inherently inductive, thereby allowing to obtain representations for new tracks without the need for model retraining.</li>
        </ul>
        We empirically validated our approach against the state of the art for representation learning on musical data. Our results show the benefit of aggregating both organizational and content information to learn track representations that are used for downstream tasks.
       
    </Container>
  </div>    
  )
}

