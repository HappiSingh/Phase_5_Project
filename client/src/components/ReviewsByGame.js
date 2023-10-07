// import React, { useEffect, useState } from "react";

// function ReviewsByGame({ user, gameID }) {
//   const [gameReviews, setGameReviews] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`/review/game/${gameID}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Fetch failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setGameReviews(data);
//         console.log(data);
//       })
//       .catch((error) => {
//         setError(error.toString());
//       });
//   }, []);

//   return (
//     <>
//       <h1 className="header"> Reviews By Game </h1>
//       {gameReviews.map((review) => (
//         <p>
//           key={review.id}
//           user={review.user}
//           comment={review.comment}
//           rating={review.rating}
//           {/* "user_id": 2,
//         "updated_at": null,
//         "user": {
//             "last_name": "Rogers",
//             "email": "yscott@example.com",
//             "id": 2,
//             "first_name": "Jonathan",
//             "age": 23
//         },
//         "comment": "Such a boring game I fell asleep",
//         "rating": 3,
//         "created_at": "2023-10-03 10:38:23",
//         "game_id": 1,
//         "game": {
//             "id": 1,
//             "genre": "Action Adventure Game",
//             "title": "Assassin's Creed 2",
//             "release_date": "2010-03-09"
//         },
//         "id": 3 */}
//         </p>
//       ))}
//     </>
//   );
// }

// export default ReviewsByGame;
