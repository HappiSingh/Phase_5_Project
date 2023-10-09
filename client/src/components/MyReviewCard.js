import "./CSS/gamecard.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function MyReviewCard({ review, user, onDelete }) {
  const navigate = useNavigate();
  let { id } = review;

  if (!user) {
    navigate("/login");
  } else {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center h-15 pb-2">{review.game.title}</h3>
            <p className="card-text text-center">{review.rating}/10 </p>
            <p className="card-text">{review.comment}</p>
          </div>
           <div className="d-grid gap-2 pb-2 px-4">
              <Button variant="outline-warning" href={`/review/update/${id}`}>
                Edit
              </Button>
              <Button variant="outline-danger" onClick={() => onDelete(id)}>
                Remove
              </Button>
            </div>
          </div>
      </>
    );
  }
}

export default MyReviewCard;
