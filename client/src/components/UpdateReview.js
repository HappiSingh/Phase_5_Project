import "./home.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateReview({ user }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({ id: id, rating: "", comment: "" });

  useEffect(() => {
    fetch(`/review/update/${id}`).then((response) => {
      if (!response.ok) {
        response.json().then((data) => setError(data["errors"]));
      } else {
        response
          .json()
          .then((data) =>
            setValues({ ...values, rating: data.rating, comment: data.comment })
          );
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <h1 className="header"> Update </h1>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type="text"
                name="rating"
                className="form-control"
                placeholder="Enter Rating"
                value={values.rating}
                onChange={(e) =>
                  setValues({ ...values, rating: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="comment">Review:</label>
              <input
                type="text"
                name="comment"
                className="form-control"
                placeholder="Enter Review"
                value={values.comment}
                onChange={(e) =>
                  setValues({ ...values, comment: e.target.value })
                }
              />
              <br />
              <button className="btn btn-info">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateReview;
