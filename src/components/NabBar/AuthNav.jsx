import React, { useContext } from 'react'
import { Container, Navbar, Nav, Form, Figure, Dropdown, NavDropdown } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { LinkContainer } from 'react-router-bootstrap';
import Img from '../../assets/Img.js';

import Switch from "react-switch";
import { ThemeContext } from './../../App';

function AuthNav() {
   let {theme , toggleTheme}= useContext(ThemeContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='Navbar' style={{ zIndex: 999 }} >
                <Container >
                    <Navbar.Brand  >
                        <Figure.Image
                            src={Img.Logo} className='logo'
                        />
                        Game Over
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {/* 'home', 'about', 'movies', 'people', 'tvShow', 'networks' */}
                    <Navbar.Collapse id="responsive-navbar-nav" >

                        {/* search input  */}
                        <Navbar.Collapse className='gap-4'>

                            {/* Login , Register , logout , profile */}
                            <Nav as='ul' className='ms-auto d-flex justify-content-center align-items-center gap-3'  >

                                {
                                    ['login', 'register'].map((nav, index) => {
                                        return (
                                            <LinkContainer key={index} to={nav} as='li'>
                                                <Nav.Link eventKey={index} className='nav-link ' style={{ cursor: 'pointer' }}>
                                                    <button className={`${nav=='register'?'btn btn-outline-primary':'btn btn-outline-dark text-light'}`}> {nav=='register'?'Join Free':`${nav.charAt(0).toUpperCase() + nav.slice(1)}`}</button>
                                                </Nav.Link>
                                            </LinkContainer>)
                                    })
                                }
                                <Switch  onColor="#191a1b"   onHandleColor="#313337"  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.6)"  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)" onChange={toggleTheme} checked={theme === "dark"} />

                            </Nav>
                        </Navbar.Collapse>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default AuthNav


