import { React, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./CSS/signup.css";
import "./CSS/home.css";
import { useNavigate } from "react-router-dom";

function AddReview({ user, game_id }) {
  const [errors, setErrors] = useState([]);
  let { id } = user;

  const navigate = useNavigate();

  function handleSubmit(rating, comment) {
    fetch("/review/new", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating, comment, id, game_id }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(navigate(`/review/user/${id}`));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <h1 className="header">Add Review</h1>
      <Formik
        initialValues={{
          rating: "",
          comment: "",
        }}
        validationSchema={Yup.object({
          rating: Yup.number()
            .min(1, "Must be between 1-10")
            .max(10, "Must be between 1-10")
            .required("Required"),
          comment: Yup.string()
            .min(25, "Must be at least 25 characters")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values.rating, values.comment);
          resetForm();
        }}
      >
        <Form className="signup-form">
          <div className="form-group">
            <label htmlFor="rating">Your Rating</label>
            <Field type="text" name="rating" />
            <ErrorMessage
              name="rating"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Add your review</label>
            <Field
              as="textarea"
              className="textbox"
              cols="42"
              rows="5"
              type="text"
              name="comment"
            />
            <ErrorMessage
              name="comment"
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

export default AddReview;
