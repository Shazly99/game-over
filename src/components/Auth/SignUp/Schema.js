import * as Yup from 'yup';


const validationSchema=()=>{
    const Schema=Yup.object({
        first_name:Yup.string().min(3,'Must be 3 characters or more').max(10,'Must be 15 characters or less').required('First name is required'),
        last_name:Yup.string().min(3,'Must be 3 characters or more').max(10,'Must be 15 characters or less').required('Last name is required'),
        age:Yup.number().min(16,'Your age must be at least 16 years old ').max(40,'Your age should not exceed 40 years').required('Age is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(3,'Password must be at least 6 charaters').required('Password is required'),
    })

    return Schema
}
export default validationSchema;