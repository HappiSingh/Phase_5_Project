import "./CSS/games.css";
import AllReviewCard from "./AllReviewCard.js";
import React, { useEffect, useState } from "react";

function AllReviews({ user }) {
  const [allReviews, setAllReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/reviews").then((response) => {
      if (!response.ok) {
        response.json().then((data) => setError(data["errors"]));
      } else {
        response.json().then((data) => setAllReviews(data));
      }
    });
  }, []);

  return (
    <>
      <h1 className="header"> Reviews </h1>
      <div className="card-grid">
        {allReviews.map((review) => (
          <AllReviewCard
            key={review.id}
            review={review}
            user={user}
          />
        ))}
      </div>
    </>
  );
}

export default AllReviews;
