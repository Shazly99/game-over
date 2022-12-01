import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Form, Container } from 'react-bootstrap';
import SignUpForm from './validationForm.jsx'
import validationSchema from './Schema';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

function SignUp() {

  const [userData, setUserData] = useState(null)
  let navigate = useNavigate()

  const userDataApi = async () => {
    if (userData) {
      let { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, userData);
      if (data.message == 'success') {
        toast.success(data.message);
        navigate('/login');
      } else {
        toast.error(data.message);
      }
    }
  }

  useEffect(() => {
    userDataApi()
  }, [userData])



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
      </Helmet>

      
      <Container className="auth__Up py-5">
        <h1 className='auth__header pb-2'>Create My Account!</h1>
        <Formik
          initialValues={{ first_name: '', last_name: '', age: '', email: '', password: '' }}
          onSubmit={values => {
            // same shape as initial values 
            setUserData(values)
            userDataApi()
          }}
          validationSchema={validationSchema}
        >
          {SignUpForm}
        </Formik>
      </Container>
    </>
  )
}

export default SignUp
