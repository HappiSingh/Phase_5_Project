
import {React,  useState }from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login({user, setUser, games}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate(); 

    function handleSubmit(email, password) {
        
        // e.preventDefault();
        console.log(email, password)
        
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password}),
        }).then((r) => {
            if (r.ok) {
            setEmail(email)
            setPassword(password)
            r.json().then((user) => setUser(user));
            navigate('/')
        } else {
            r.json().then((err) => setErrors(err.errors));
            // console.log([errors])
            // navigate('/signup')
        }
        });
    }


    return (
     <>
     <h1 className='header'>Login</h1>
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
        
        
        handleSubmit(values.email, values.password)
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

        
        <div className="error-message">
        <p>{errors}</p>
        
        </div>

        </Form>
     
        </Formik>
     </>
  );
}
          export default Login;

      
  