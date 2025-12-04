import React from "react";
import { Link } from "react-router-dom";

const featuredImage = {
  src: "https://i.imgur.com/H7nxSBW.jpg",
  caption: "Me!",
};

export default function HomePage() {
  const current = featuredImage;
  return (
    <div className="home">
      <section className="hero-grid">
        <div className="hero-copy">
          <h2 className="hero-title">
            Portraits, travel stories, and the glow between.
          </h2>
          <p className="hero-subtitle">
            I am Boulder-based photographer crafting intimate portraits, cinematic travel journals,
            and documentary frames that feel alive.
          </p>

    

          <div className="hero-actions">
            <Link className="btn primary" to="/gallery">View Gallery</Link>
            <Link className="btn ghost" to="/contact">Book a Shoot</Link>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <img src={current.src} alt={current.caption} />
            <div className="hero-image-caption">{current.caption}</div>
          </div>
        </div>
      </section>

    </div>
  );
}
