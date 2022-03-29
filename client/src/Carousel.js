import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselComponent({recommendedsongsarray}) {
    return (
        <Carousel>
        {recommendedsongsarray.map(songObject => 
            <Carousel.Item key = {songObject['song']['id']}>
            <img
            className = "image"
              src={songObject['album']['image_url']}
              alt={songObject['song']['name']}
            />
            <Carousel.Caption>
              <h3>{songObject['song']['name']}</h3>
              <p>{songObject['artist']['name']}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
         
      </Carousel>
    )
}
