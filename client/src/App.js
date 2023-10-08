import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import NavBar from "./components/NavBar.js";
import Games from "./components/Games.js";
import MyReviews from "./components/MyReviews";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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
            <Route path="/games" element={<Games user={user} />} exact />

            <Route
              path="/review/user/:id"
              element={<MyReviews user={user} />}
              exact
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
