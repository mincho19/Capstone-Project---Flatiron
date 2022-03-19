import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function NavBar() {
  return (
    <Navbar bg="light" variant="light" fixed="top">
    <Container>
    <Navbar.Brand href="/main">Minify</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Profile">Profile</Nav.Link>
      <Nav.Link href="#Recommendations">Recommendations</Nav.Link>
      <Nav.Link href="#Logout">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
