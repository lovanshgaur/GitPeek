"use client";

import { useState } from "react";

export default function Sidebar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSearch(username.trim());
    setUsername("");
  };

  return (
    <section className="sidebar">
      <div className="logo">
        <img src="/mascot.png" alt="GitPeek Mascot" />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Enter your GitHub username</h3>
        <div className="search">
          <input
            type="text"
            placeholder="octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" title="submit">G</button>
        </div>
      </form>
    </section>
  );
}
