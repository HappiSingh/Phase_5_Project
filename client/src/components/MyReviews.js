import "./home.css";
import MyReviewCard from "./MyReviewCard.js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MyReviews({ user }) {
  const [myReviews, setMyReviews] = useState([]);
  const [error, setError] = useState(null);
  //   console.log(user.id);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`/review/user/${id}`).then((response) => {
      if (!response.ok) {
        response.json().then((data) => setError(data["errors"]));
      } else {
        response.json().then((data) => setMyReviews(data));
      }
    });
  }, []);

  //   useEffect(() => {
  //     fetch(`/review/user/${id}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Fetch failed");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setMyReviews(data);
  //       })
  //       .catch((error) => {
  //         setError(error.toString());
  //       });
  //   }, []);

  if (error) {
    return <h1 className="header"> {error} </h1>;
  } else {
    return (
      <>
        <h1 className="header"> My Reviews </h1>
        <div className="card-grid">
          {myReviews.map((review) => (
            <MyReviewCard key={review.id} review={review} user={user} />
          ))}
        </div>
      </>
    );
  }
}

export default MyReviews;
