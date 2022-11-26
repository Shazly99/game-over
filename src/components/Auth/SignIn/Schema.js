import * as Yup from 'yup';


const validationSchema=()=>{
    const Schema=Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(3,'Password must be at least 6 charaters').required('Password is required'),
    })
    return Schema
}
export default validationSchema;