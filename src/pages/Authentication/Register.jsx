import { Button, TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const initialValues = { firstName:"", lastName:"", email:"", password:"", gender:""};
const validateScheme = {email:Yup.string().email("invalid Email").required("Email is Required"),
  password:Yup.string().min(6,"Password must be at least 6 characters").required("Password is required")
}
const Register = () => {
  const [gender, setGender] = useState();
  
  const handleSubmit = (values) => {
    values.gender = gender;
    console.log("handle Submit",values);
  }
  const handleChange = (event) => {
    setGender(event.target.value);
  }
  return (
    <>
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className='space-y-5'>
        <div className='space-y-5'>
          <div>
            <Field as={TextField} name="firstname" placeholder="First Name" type="text" variant="outlined" fullWidth/>
            <ErrorMessage name="firstname" component={"div"} className='text-red-500'/>
          </div>
          <div>
            <Field as={TextField} name="lastname" placeholder="Last Name" type="text" variant="outlined" fullWidth/>
            <ErrorMessage name="lastname" component={"div"} className='text-red-500'/>
          </div>
          <div>
            <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined" fullWidth/>
            <ErrorMessage name='email' component={"div"} className='text-red-500'/>
          </div>
          <div>
            <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth/>
            <ErrorMessage name='password' component={"div"} className='text-red-500'/>
          </div>
          <div>
          <RadioGroup
            onChange={handleChange}
            row
            aria-label="gender"
            name="gender"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <ErrorMessage name='gender' component={"div"} className='text-red-500'/>
          </RadioGroup>
          </div>
        </div>
        <Button sx={{padding:".8rem 0rem"}} fullWidth type='submit' variant='contained' color='primary'>Register</Button>
      </Form>
    </Formik>
    </>
  )
}

export default Register