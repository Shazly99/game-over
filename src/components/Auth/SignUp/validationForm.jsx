import { Field, Formik, ErrorMessage } from 'formik';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function SignUpForm(e) {
  
  return <form className='auth__form ' onSubmit={e.handleSubmit}>
    <div className=' auth__username d-flex flex-row justify-content-between '>
      <div className='  w-100'>
        <Field name="first_name" type="text" size='sm' className={`form-control bg-dark      shadow-lg ${e.errors.first_name && e.touched.first_name && 'is-invalid'}   ${e.values.first_name && 'is-valid'} border-0 `} placeholder='enter your first name ' />
        <ErrorMessage name='first_name' component="div" render={msg => <div className='text-danger'>{msg}</div>} />
      </div>

      <div className='  w-100'>
        <Field name="last_name" type="text" size='sm' className={` ${e.errors.last_name && e.touched.last_name && 'is-invalid'}   ${e.values.last_name && 'is-valid'}  form-control d-block   bg-dark   shadow-lg border-0`} placeholder='enter your last name ' />
        <ErrorMessage name='last_name' component="div" render={msg => <div className='text-danger'>{msg}</div>} />
      </div>
    </div>

    <div>
    <Field name="age" type="number" size='sm' className={` ${e.errors.age && e.touched.age && 'is-invalid'}   ${e.values.age && 'is-valid'}  form-control d-block   bg-dark border-0   shadow-lg`} placeholder='enter your current age ' />
        <ErrorMessage name='age' component="div" render={msg => <div className='text-danger'>{msg}</div>} />
    </div>

    <div>
    <Field name="email" type="email" size='sm' className={` ${e.errors.email && e.touched.email && 'is-invalid'}   ${e.values.email && 'is-valid'}  form-control d-block   bg-dark  border-0 shadow-lg`} placeholder='enter your email ' />
        <ErrorMessage name='email' component="div" render={msg => <div className='text-danger'>{msg}</div>} />
    </div>

    <div>
    <Field name="password" type="password" size='sm' className={` ${e.errors.password && e.touched.password && 'is-invalid'}   ${e.values.password && 'is-valid'}  form-control d-block  border-0 bg-dark   shadow-lg`} placeholder='enter your password' />
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