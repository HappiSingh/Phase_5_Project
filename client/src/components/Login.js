import { React, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(email, password) {
    fetch("/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
        });
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <h1 className="header">Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email")
            .required("Must enter an email"),

          password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Must enter a password"),
        })}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values.email, values.password);
          resetForm();
        }}
      >
        <Form className="login-form">
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
export default Login;
