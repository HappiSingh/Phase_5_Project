import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import NavBar from "./components/NavBar.js";
import Games from "./components/Games.js";
import AddReview from "./components/AddReview";
import MyReviews from "./components/MyReviews";
import Publishers from "./components/Publishers";
import { useNavigate } from "react-router-dom";
import UpdateReview from "./components/UpdateReview";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [selectedGameID, setSelectedGameID] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/check_session").then((response) => {
      if (!response.ok) {
        response.json().then((data) => setError(data["errors"]));
      } else {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  function handleLogoutClick() {
    fetch(`/logout`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/login");
      }
    });
  }

  function handleNewReview(g_id) {
    setSelectedGameID(g_id);
    navigate("/review/new");
  }

  function handleDelete(r_id) {
    fetch(`/review/${r_id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        response.json().then((data) => setError(data["errors"]));
      } else {
        console.log("Success");
        window.location.reload();
      }
    });
  }

  return (
    <>
      <div>
        <main>
          <NavBar user={user} onLogout={handleLogoutClick} />
          <Routes>
            <Route path="/" element={<Home />} exact />
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
              element={<Games user={user} onNewReview={handleNewReview} />}
              exact
            />

            <Route
              path="/review/user/:id"
              element={<MyReviews user={user} onDelete={handleDelete} />}
              exact
            />

            <Route
              path="/review/new"
              element={<AddReview user={user} game_id={selectedGameID} />}
              exact
            />
            <Route
              path="/review/update/:id"
              element={<UpdateReview user={user} />}
              exact
            />
            <Route
              path="/publishers"
              element={<Publishers user={user} />}
              exact
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
