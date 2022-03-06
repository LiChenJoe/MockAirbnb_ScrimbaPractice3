import React from "react";
import PhotoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img
        id="hero--image"
        src={PhotoGrid}
        alt="Grid design for hero sectiomn."
      />
      <h1>Online Experiences</h1>
      <h4>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h4>
    </section>
  );
}
