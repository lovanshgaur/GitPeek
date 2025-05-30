"use client";

import { useState, useEffect } from "react";

export default function GitHubInput({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;
    onSearch(username.trim());
  };

  useEffect(() => {
    console.log("GitHubInput mounted on client");
  }, []);

  return (
<form onSubmit={handleSubmit} className="form">
  <input
    type="text"
    placeholder="Enter GitHub username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="input"
  />
  <button type="submit" className="button">
    Search
  </button>
</form>

  );
}
