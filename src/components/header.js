import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/"><Navbar.Brand>Self Learning</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/service"><Nav.Link>Service</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />
        </>
    )
}

export default header