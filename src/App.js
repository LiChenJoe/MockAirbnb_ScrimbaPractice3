import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Card
        Img={Katie}
        Rate={5}
        People={6}
        Country={"USA"}
        Title={"Life lessons with Katie Zaferes"}
        Price={136}
      />
      <Card
        Img={Katie}
        Rate={5}
        People={30}
        Country={"USA"}
        Title={"Learn wedding photography"}
        Price={125}
      />
      <Card
        Img={Katie}
        Rate={4.8}
        People={2}
        Country={"USA"}
        Title={"Group Mountain Bikin"}
        Price={50}
      />
    </div>
  );
}
