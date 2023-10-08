import "./gamecard.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function GameCard({ user, game }) {
  let { id, title, release_date, genre } = game;
  const navigate = useNavigate();

  // function handleClick() {
  //   setGameID(id);
  //   navigate(`/review/game/${id}`);
  // }

  if (!user) {
    navigate("/login");
  } else {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">Release Date: {release_date}</p>
            <p className="card-text">Genre: {genre}</p>
            <div className="d-grid gap-2">
              {/* <Button variant="primary" size="md" onClick={handleClick}>
                Reviews
              </Button> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GameCard;
