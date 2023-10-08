import "./games.css";
import GameCard from "./GameCard.js";
import React, { useEffect, useState } from "react";

function Games({ user }) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/games").then((response) => {
      if (!response.ok) {
        response.json().then((data) => setError(data["errors"]));
      } else {
        response.json().then((data) => setGames(data));
      }
    });
  }, []);

  return (
    <>
      <h1 className="header"> Games </h1>
      <div className="card-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} user={user} />
        ))}
      </div>
    </>
  );
}

export default Games;
