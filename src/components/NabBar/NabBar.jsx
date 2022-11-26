import React from 'react'
import { Container, Navbar, Nav, Form, Figure, Dropdown, NavDropdown } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { LinkContainer } from 'react-router-bootstrap'
import Icon from "../../constants/Icons";
import Img from '../../assets/Img.js'
function NabBar({LogOut}) {
  
  return (
    <div>
      <Navbar fixed='top'  collapseOnSelect expand="lg" className='  Navbar' variant="dark">
        <Container className='container-xxl' >
          <Navbar.Brand  >
            <Figure.Image
              src={Img.Logo} className='logo'
            />
            Game Over
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* 'home', 'about', 'movies', 'people', 'tvShow', 'networks' */}
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto nav-home" as='ul'>
              {
                ['home', 'all'].map((nav, index) => {
                  return (
                    <LinkContainer key={index} to={nav == 'home' ? '' : `/games/${nav}` } as='li' >
                      <Nav.Link eventKey={index} className='nav-link ' style={{ cursor: 'pointer' }}>{nav.charAt(0).toUpperCase() + nav.slice(1)}</Nav.Link>
                    </LinkContainer>
                  )
                })
              }

              <NavDropdown title="sort-by" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">       pc</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> browser </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Platforms" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">       release-date</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> popularity </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> alphabetical </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> relevance </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">  release-date</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> popularity </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> alphabetical </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> relevance </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* search input  */}
            <Navbar.Collapse className='gap-4'>


              {/* Login , Register , logout , profile */}
              <Nav as='ul' className='ms-auto'  >
                <Nav>
                <LinkContainer to={'/login'} as='li'>
                    <Nav.Link eventKey={1} onClick={LogOut} className='nav-link btn-outline-primary ' style={{ cursor: 'pointer' }}>
                      <button className='btn btn-outline-primary '>Log Out</button>
                    </Nav.Link>
                </LinkContainer>
                </Nav>
               
              </Nav>
            </Navbar.Collapse>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default NabBar