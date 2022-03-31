import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function NavBar() {
  return (
    <Navbar bg="light" variant="light" fixed="top">
    <Container className = "navBarContainer">
      <Navbar.Brand className="ml-auto"href="/main">Minify</Navbar.Brand>
      <Nav className="pull-right">
        <Nav.Link href="/recommendations">Recommendations</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
      </Nav>
      </Container>
  </Navbar>
  )
}
