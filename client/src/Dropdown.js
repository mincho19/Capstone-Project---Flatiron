import React, { useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


export default function DropdownComponent({ genres, setGenre }) {

  const [button, setButton] = useState('Dropdown')

  function handleSelect(e) {
    setGenre(e)
    setButton(e)
  }

  return (
    <DropdownButton title= {button} onSelect={handleSelect} className = "dropDown">
      {genres.map(genre => {
        return <Dropdown.Item key = {genre} eventKey={genre}>{genre}</Dropdown.Item>
      })}
    </DropdownButton>
  )
}
