import { React, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { useNavigate } from "react-router-dom";

function SignUp({ user, setUser }) {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(first_name, last_name, age, email, password) {
    fetch("/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first_name, last_name, age, email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
        });
        navigate("/login");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <h1 className="header">SignUp</h1>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          age: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          first_name: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          last_name: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          age: Yup.number()
            .min(5, "Age must be between 5 and 100")
            .max(100, "Age must be between 5 and 100")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(
            values.first_name,
            values.last_name,
            values.age,
            values.email,
            values.password
          );
          resetForm();
        }}
      >
        <Form className="signup-form">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <Field type="text" name="first_name" />
            <ErrorMessage
              name="first_name"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <Field type="text" name="last_name" />
            <ErrorMessage
              name="last_name"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <Field type="text" name="age" />
            <ErrorMessage
              name="age"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>

          <div className="error-message">
            <p>{errors}</p>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default SignUp;
