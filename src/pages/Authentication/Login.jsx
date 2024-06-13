import { Button, TextField } from '@mui/material';
import {ErrorMessage, Field, Formik, Form} from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const initialValues ={email:"",password:"",};
const validationSchema = {email:Yup.string().email("Invalid Email").required("Email is Required"),
  password:Yup.string().min(6,"Password must be at least 6 characters").required("Password is required")
};
const Login = () => {
  const [formValue, setFormValue] = useState();
  
  const handleSubmit = (values) => {
    console.log("handle Submit",values);
  }
  return (
    <>
    <Formik onSubmit={handleSubmit}  initialValues={initialValues}>
      <Form className="space-y-5 ">
        <div className='space-y-5'>
          <div>
            <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth/>
            <ErrorMessage name='email' component={"div"} className='text-red-500'/>
          </div>
          <div>
            <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth/>
            <ErrorMessage name='password' component={"div"} className='text-red-500'/>
          </div>
        </div>
        <Button sx={{padding:".8rem 0rem"}} fullWidth type='submit' variant='contained' color='primary'>Login</Button>
      </Form>
    </Formik>
    </>
  )
}

export default Login