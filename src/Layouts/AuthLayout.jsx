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
        <Row className=' g-0 shadow auth__form'>
          <Col sm={0} className='auth__left'>
            <Figure.Image
              src={Img.Cover} className='auth_image w-100 h-100'
            />
          </Col>
          <Col md={6} sm={12} className='auth__right'>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AuthLayout
