import "./home.css";
import MyReviewCard from "./MyReviewCard.js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MyReviews({ user, onDelete }) {
  const [myReviews, setMyReviews] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/review/user/${id}`).then((response) => {
      if (!response.ok) {
        response.json().then((data) => setError(data["errors"]));
      } else {
        response.json().then((data) => setMyReviews(data));
      }
    });
  }, []);

  if (error) {
    return <h1 className="header"> {error} </h1>;
  } else {
    return (
      <>
        <h1 className="header"> My Reviews </h1>
        <div className="card-grid">
          {myReviews.map((review) => (
            <MyReviewCard
              key={review.id}
              review={review}
              user={user}
              onDelete={onDelete}
            />
          ))}
        </div>
      </>
    );
  }
}

export default MyReviews;
