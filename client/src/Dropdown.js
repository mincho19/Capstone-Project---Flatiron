import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'

export default function DropdownComponent({genres, setGenre}) {

    const [button, setButton] = useState('Dropdown')

    function handleSelect(e){
        setGenre(e)
        setButton(e.value)
        console.log('fired')
    }

  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {button}
    </Dropdown.Toggle>
  
    <Dropdown.Menu onSelect = {handleSelect} className = "dropDownMenu">
        
        {genres.map(genre => {
            <Dropdown.Item>genre</Dropdown.Item>
        })}
            <Dropdown.Item>genre</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}
