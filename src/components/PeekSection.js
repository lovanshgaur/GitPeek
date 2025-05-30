"use client";

import { useState } from "react";
import html2canvas from "html2canvas";

export default function PeekSection({ userData, layout, setLayout, peekOn }) {
  async function toBase64Image(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  const handleDownload = async () => {
    const card = document.getElementById("card");
    if (!card) return;

    const avatarImg = card.querySelector("img.avatar");
    let originalSrc;

    if (avatarImg) {
      originalSrc = avatarImg.src;
      try {
        const base64Src = await toBase64Image(originalSrc);
        avatarImg.src = base64Src;
      } catch (err) {
        console.error("Failed to convert avatar image to base64:", err);
      }
    }

    html2canvas(card, {
      useCORS: true,
      allowTaint: false,
      backgroundColor: null,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "profile-card.png";
      link.click();

      if (avatarImg && originalSrc) {
        avatarImg.src = originalSrc;
      }
    });
  };

  return (
    <section className={`peek ${peekOn ? "peek-on" : ""}`}>
      <div className="profile">
        <div id="card" className={layout}>
          <div className="profile-card">
            {userData && (
              <>
                {userData.avatar_url && (
                  <img
                    src={userData.avatar_url}
                    alt={`${userData.name || userData.login || "User"}'s Avatar`}
                    className="avatar"
                  />
                )}

                {userData.login && <h2 className="name">{userData.login}</h2>}

                {userData.name && <p className="username">{userData.name}</p>}

                {userData.bio && <p className="bio">{userData.bio}</p>}

                <div className="stats">
                  {userData.public_repos != null && (
                    <div className="stat">
                      <span className="number">{userData.public_repos}</span>
                      <span className="label">Projects</span>
                    </div>
                  )}
                  {userData.followers != null && (
                    <div className="stat">
                      <span className="number">{userData.followers}</span>
                      <span className="label">Followers</span>
                    </div>
                  )}
                  {userData.following != null && (
                    <div className="stat">
                      <span className="number">{userData.following}</span>
                      <span className="label">Following</span>
                    </div>
                  )}
                </div>

                {userData.location && <p className="location">📍 {userData.location}</p>}
              </>
            )}
          </div>
        </div>

        <button onClick={handleDownload} id="download-btn" disabled={!userData}>
          Download
        </button>
      </div>

      <div className="controls" id="layouts">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            type="button"
            title={`layout${num}`}
            className={`change-layout ${layout === `layout${num}` ? "active" : ""}`}
            aria-pressed={layout === `layout${num}`}
            onClick={() => setLayout(`layout${num}`)}
          >
            Layout{num}
          </button>
        ))}
      </div>
    </section>
  );
}
