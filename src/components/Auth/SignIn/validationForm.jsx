import { Field, Formik, ErrorMessage } from 'formik';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function SignInForm(e) {
  console.log(e);
    return <form className='auth__form' onSubmit={e.handleSubmit}>
      <div>
      <Field name="email" type="email" size='xl' className={` ${e.errors.email && e.touched.email && 'is-invalid'}   ${e.values.email && 'is-valid'}  form-control d-block   bg-dark   shadow-lg`} placeholder='enter your first name ' />
          <ErrorMessage name='email' component="div" render={msg => <div className='text-danger'>{msg}</div>} />
      </div>
  
      <div>
      <Field name="password" type="password" size='xl' className={` ${e.errors.password && e.touched.password && 'is-invalid'}   ${e.values.password && 'is-valid'}  form-control d-block   bg-dark   shadow-lg`} placeholder='enter your first name ' />
          <ErrorMessage name='password' component="div" render={msg => <div className='text-danger'>{msg}</div>} />
      </div>
  
      <button  type='submit'  className="btn btn-primary btn-user btn-block w-100 py-2">Create Account</button>
      <div>
        <span className='text-muted small'>This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" className="text-secondary link">  Privacy Policy   </a>
          and <a href="https://policies.google.com/terms" className="text-secondary link">Terms of Service  </a>  apply.</span>
      </div>
      <hr className='auth__divid' />
  
      <div className="text-center">
        <span className="small">Already a member?</span>
        <Link to={'/login'} className="small a2 cursor"  > Log In </Link>
      </div>
  
    </form>
  
  }
  