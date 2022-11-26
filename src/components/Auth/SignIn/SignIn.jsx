import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Form, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../../assets/Img.js';
import SignInForm from './validationForm';
import toast, { Toaster } from 'react-hot-toast';
import validationSchema from './../SignIn/Schema';

function SignIn() {
  const [userData, setUserData] = useState(null) 
  const [user, setUser] = useState(null) 
  let navigate = useNavigate()

  const userDataApi = async () => {
    if (userData) {
      let {data}= await axios.post(`https://route-egypt-api.herokuapp.com/signin`, userData);
      if (data.message == 'success') {
        localStorage.setItem("token", data.token); 

        toast.success(data.message );
        navigate('/');
      } else {
        toast.error(data.message );
      }
    }
  }
 
 useEffect(() => {
  userDataApi()
 }, [userData])
 
  return (
    <>
      <Container className="auth py-5">
        <img className='auth__logo ' src={Img.Logo} alt="" />
        <h1 className='auth__header'>Log in to GameOver</h1>
        <Formik
          initialValues={{ first_name: '', last_name: '', age: '', email: '', password: '' }}
          onSubmit={values => {
            // same shape as initial values 
            setUserData(values) 
            userDataApi()
          }}
          validationSchema={validationSchema}
        >
          {SignInForm}
        </Formik>
  {/*       <Form className='auth__form'>
          <Form.Control type='email' className='w-100' placeholder='Email' />
          <Form.Control type='password' placeholder='Password' />
          <button className="btn btn-primary btn-user btn-block w-100 py-2">Login</button>
          <hr className='auth__divid' />

          <div className="text-center d-flex flex-column">
            <a className="small a2 cursor" onClick={() => (alert('ههه اعمل اكونت جديد'))}>Forgot Password?</a>
            <div>
              <span className="small">Not a member yet? </span>
              <Link to={'/register'} className="small a2"  > Create Account </Link>
            </div>
          </div>
        </Form> */}

      </Container>
    </>
  )
}

export default SignIn