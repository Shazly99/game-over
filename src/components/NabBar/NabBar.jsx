import React, { useContext } from 'react'
import { Container, Navbar, Nav, Form, Figure, Dropdown, NavDropdown } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { LinkContainer } from 'react-router-bootstrap'
import Icon from "../../constants/Icons";
import Img from '../../assets/Img.js'
import { Link } from 'react-router-dom';
import Switch from "react-switch";
import { ThemeContext } from './../../App';

function NabBar({ LogOut }) {
  let {theme , toggleTheme}= useContext(ThemeContext)

  return (
    
    <div>
      <Navbar fixed='top' collapseOnSelect expand="lg" className='  Navbar' variant="dark">
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
                    <LinkContainer key={index} to={nav == 'home' ? '' : `/games/${nav}`} as='li' >
                      <Nav.Link eventKey={index} className='nav-link ' style={{ cursor: 'pointer' }}>{nav.charAt(0).toUpperCase() + nav.slice(1)}</Nav.Link>
                    </LinkContainer>
                  )
                })
              }

              <NavDropdown title="Platforms" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/games/Platforms/pc"> pc</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/games/Platforms/browser">browser </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Sort-by" id="collasible-nav-dropdown">
                {
                  ["release-date","popularity","alphabetical","relevance"].map((sort,index)=>(
                    <NavDropdown.Item  key={index} as={Link} to={`/games/sort-by/${sort}`}>{sort}</NavDropdown.Item>
                  ))
                }
              </NavDropdown>

              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                {
                  ["racing","sports","social","shooter","open-world","zombie","fantasy","action-rpg","action","flight","battle-royale"].map((Categories,index)=>(
                    <NavDropdown.Item  key={index} as={Link} to={`/games/category/${Categories}`}>{Categories}</NavDropdown.Item>
                  ))
                }
              </NavDropdown>
 

       
            </Nav>
            {/* search input  */}
            <Navbar.Collapse className='gap-4'>


              {/* Login , Register , logout , profile */}
              <Nav as='ul' className='ms-auto'  >
                <Nav className='d-flex justify-content-center align-items-center gap-3'>
                  <LinkContainer to={'/login'} as='li'>
                    <Nav.Link eventKey={1} onClick={LogOut} className='nav-link  ' style={{ cursor: 'pointer' }}>
                      <button className='btn btn-outline-primary '>Log Out</button>
                    </Nav.Link>
                  </LinkContainer>
                  <Switch  onColor="#191a1b"   onHandleColor="#313337"  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.6)"  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)" onChange={toggleTheme} checked={theme === "dark"} />

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