import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Card />
    </div>
  );
}
