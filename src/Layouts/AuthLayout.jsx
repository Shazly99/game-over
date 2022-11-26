import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Component from '../constants/Component'
import Img from '../assets/Img.js';
import { Toaster } from 'react-hot-toast'

function AuthLayout() {
  return (
    <>
    
      <Component.AuthNav />

      <Container className='auth__img__form vh-100 d-flex justify-content-center align-items-center'>
        <Row className=' g-0 auth__form'>
          <Col className='auth__left'>
            <Figure.Image
              src={Img.Cover} className='auth_image w-100 h-100'
            />
          </Col>
          <Col className='auth__right'>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AuthLayout
