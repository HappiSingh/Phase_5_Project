import "./gamecard.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function MyReviewCard({ review, user, onDelete, onEdit }) {
  const navigate = useNavigate();
  let { id } = review;

  if (!user) {
    navigate("/login");
  } else {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{review.game.title}</h3>
            <p className="card-text">Rating: {review.rating} </p>
            <p className="card-text">{review.comment}</p>
            <div className="d-grid gap-2">
              <Button variant="outline-warning" onClick={() => onEdit(id)}>
                Edit
              </Button>
              <Button variant="outline-danger" onClick={() => onDelete(id)}>
                Remove
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyReviewCard;
