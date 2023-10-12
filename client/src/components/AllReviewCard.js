import "./CSS/gamecard.css";
import { useNavigate } from "react-router-dom";

function AllReviewCard({ user, review }) {
  let { rating, comment, game } = review;

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  } else {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">{game.title}</h3>
            <p className="card-text text-center">{rating}/10</p>
            <p className="card-text">{comment}</p>
          </div>
          <div className="card-footer text-right font-italic">
            {review.user.first_name} {review.user.last_name}
          </div>
        </div>
      </>
    );
  }
}

export default AllReviewCard;
