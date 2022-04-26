import React from 'react'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap'

export default function About() {

  return (

    <div>
      {document.body.style = "background: black"}
      <NavBar />
      
      <Container className="aboutContainer">

        <h1>Track Audio Features</h1>
        <div>Spotify Web API provides many different metrics to analyze music. In the case of this application, I was able to call for the audio features of the user's top songs to provide further recommendations. The metrics returned are defined below: </div>
        <br></br>

        <div className = "metricFlex">
            <strong>Acousticness</strong>
            <p> A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.</p>
        </div>
        
        <div className = "metricFlex">
            <strong>Danceability</strong>
            <p>Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.</p>
        </div>
        <div className = "metricFlex">
            <strong>Energy</strong>
            <p> Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.</p>
        </div>
        <div className = "metricFlex">
            <strong>Instrumentalness</strong>
            <p>Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.</p>
        </div>
        <div className = "metricFlex">
            <strong>Key</strong>
            <p>The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.</p>
        </div>
        <div className = "metricFlex">
            <strong>Liveness</strong>
            <p>Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.</p>
        </div>
        <div className = "metricFlex">
            <strong>Loudness</strong>
            <p>The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.</p>
        </div>
        <div className = "metricFlex">
            <strong>Mode</strong>
            <p>Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.</p>
        </div>
        <div className = "metricFlex">
            <strong>Speechiness</strong>
            <p>Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.</p>
        </div>
        <div className = "metricFlex">
            <strong>Tempo</strong>
            <p>The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.</p>
        </div>
        <div className = "metricFlex">
            <strong>Time Signature</strong>
            <p>An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".</p>
        </div>
        <div className = "metricFlex">
            <strong>Valence</strong>
            <p>A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</p>
        </div>
{/* 
        <h1>Music Recommendation Method</h1>
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
        We empirically validated our approach against the state of the art for representation learning on musical data. Our results show the benefit of aggregating both organizational and content information to learn track representations that are used for downstream tasks. */}

      </Container>
    </div>
  )
}

