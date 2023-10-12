import "./CSS/home.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function UpdateReview({ user }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState(null);
  const [values, setValues] = useState({ id: id, rating: "", comment: "" });

  useEffect(() => {
    fetch(`/review/update/${id}`).then((response) => {
      if (!response.ok) {
        response.json().then((data) => setErrors(data["errors"]));
      } else {
        response
          .json()
          .then((data) =>
            setValues({ ...values, rating: data.rating, comment: data.comment })
          );
      }
    });
  }, []);

  const handleSubmit = (values) => {
    fetch(
      `/review/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      },
      navigate(`/review/user/${user.id}`)
    );
  };

  return (
    <>
      <h1 className="header">Update</h1>
      <Formik
        initialValues={{
          rating: values.rating,
          comment: values.comment,
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
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form className="signup-form">
          <div className="form-group">
            <label htmlFor="rating">Enter Rating</label>
            <Field type="text" name="rating" placeholder={values.rating} />
            <ErrorMessage
              name="rating"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Enter Review</label>
            <Field type="text" name="comment" placeholder={values.comment} />
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

export default UpdateReview;

//   return (
//     <>
//       <h1 className="header"> Update </h1>
//       <br />
//       <div className="d-flex w-100 vh-auto justify-content-center align-items-center">
//         <div className="w-50 border bg-dark text-white p-5">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="rating" className="pb-2">
//                 Rating:
//               </label>
//               <input
//                 type="text"
//                 name="rating"
//                 className="form-control"
//                 placeholder="Enter Rating"
//                 value={values.rating}
//                 onChange={(e) =>
//                   setValues({ ...values, rating: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label htmlFor="comment" className="pb-2">
//                 Review:
//               </label>
//               <textarea
//                 rows="3"
//                 type="text"
//                 name="comment"
//                 className="form-control"
//                 placeholder="Enter Review"
//                 value={values.comment}
//                 onChange={(e) =>
//                   setValues({ ...values, comment: e.target.value })
//                 }
//               ></textarea>
//               <br />
//               <div className="d-flex flex-row-reverse">
//                 <button className="btn btn-info">Update</button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
