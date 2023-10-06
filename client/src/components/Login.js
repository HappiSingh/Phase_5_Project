
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './signup.css';


function Login() {
  
    return (
     <>
     <h1>Login</h1>
      <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
            password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className='login-form'>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message"/>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </Form>
      </Formik>
     </>
    );
  }
  
  export default Login;