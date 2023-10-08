import "./CSS/games.css";
import PublisherCard from "./PublisherCard.js";
import React, { useEffect, useState } from "react";

function Publishers({ user }) {
  const [publishers, setPublishers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/publishers").then((response) => {
      if (!response.ok) {
        response.json().then((data) => setError(data["errors"]));
      } else {
        response.json().then((data) => setPublishers(data));
      }
    });
  }, []);

  return (
    <>
      <h1 className="header">Publishers</h1>
      <div className="card-grid">
        {publishers.map((publisher) => (
          <PublisherCard key={publisher.id} publisher={publisher} user={user} />
        ))}
      </div>
    </>
  );
}

export default Publishers;
