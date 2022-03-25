import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function NavBar() {
  return (
    <Navbar bg="light" variant="light" fixed="top">
    <Container>
    <Navbar.Brand href="/main">Minify</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/recommendations">Recommendations</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      {/* <Nav.Link href="#Profile">Profile</Nav.Link> */}
      <Nav.Link href="/logout">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
