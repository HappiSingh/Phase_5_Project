import "./games.css";
import GameCard from "./GameCard.js";

function Games({ user, games, setGameID }) {
  return (
    <>
      <h1 className="header"> Games </h1>
      <div className="card-grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            user={user}
            setGameID={setGameID}
          />
        ))}
      </div>
    </>
  );
}

export default Games;
