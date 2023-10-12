import "./CSS/gamecard.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function GameCard({ user, game, onNewReview }) {
  let { id, title, release_date, genre } = game;

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  } else {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center h-25">{title}</h3>
            <p className="card-text mt-4">Released: {release_date}</p>
            <p className="card-text">Genre: {genre}</p>
          </div>
          <div className="card-footer d-grid gap-2">
            <Button variant="primary" size="md" onClick={() => onNewReview(id)}>
              Add a Review
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default GameCard;
