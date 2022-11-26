import { Field, Formik, ErrorMessage } from 'formik';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Icons from '../../../constants/Icons';


export default function SignInForm(e) {
 console.log(e);
    return <> <form className='auth__form' onSubmit={e.handleSubmit}>
      <div>
      <Field name="email" type="email" size='xl' className={` ${e.errors.email && e.touched.email && 'is-invalid'}   ${e.values.email && 'is-valid'}  py-2 form-control    bg-dark border-0   shadow-lg`} placeholder='enter your email '  />
          <ErrorMessage name='email' component="div" render={msg => <div className='text-danger'>{msg}</div>} />
      </div>
  
      <div>
      <Field name="password" type="password" size='xl' className={` ${e.errors.password && e.touched.password && 'is-invalid'}   ${e.values.password && 'is-valid'} py-2 form-control border-0  bg-dark   shadow-lg`} placeholder='enter your password' />
          <ErrorMessage name='password' component="div" render={msg => <div className='text-danger'>{msg}</div>} />
      </div>
  
      <button  disabled={!e.isValid} type='submit'  className={`  btn btn-primary btn-user btn-block w-100 py-2 ${!e.isValid?'cursor-none':'cursor'}`} >
        Login
      </button>

  
    </form>
    <div className='auth__divid' />
    <a className='text__blue mb-2'  onClick={()=>alert('معلااااش')}>Forgot Password?</a>
      <div className="text-center">
        <span style={{fontSize:'16px'}} className="small">Not a member yet?</span>
        <Link to={'/register'} className="small cursor text__blue"  >Create Account<Icons.ChevronR size={20}/> </Link>
      </div>
  </> 
  }
  