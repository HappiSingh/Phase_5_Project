import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import NavBar from "./components/NavBar.js";
import Games from "./components/Games.js";
import ReviewsByGame from "./components/ReviewsByGame";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [games, setGames] = useState([]);
  const [gameID, setGameID] = useState(null);

  useEffect(() => {
    fetch("/check_session")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch failed");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        setError(error.toString());
      });
  }, []);
  // add user as dependency?

  useEffect(() => {
    fetch("/games")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch failed");
        }
        return response.json();
      })
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        setError(error.toString());
      });
  }, []);

  function handleLogoutClick() {
    fetch(`/logout`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <div>
        <main>
          <NavBar user={user} onLogout={handleLogoutClick} />
          <Routes>
            <Route
              path="/"
              element={<Home user={user} setUser={setUser} />}
              exact
            />
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
              exact
            />
            <Route
              path="/signup"
              element={<SignUp user={user} setUser={setUser} />}
              exact
            />
            <Route
              path="/games"
              element={
                <Games user={user} games={games} setGameID={setGameID} />
              }
              exact
            />
            <Route
              path="/review/game/:id"
              element={<ReviewsByGame user={user} gameID={gameID} />}
              exact
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
