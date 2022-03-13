import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <div className="list">
      {data.map(item=>
         <Card 
         Key={item.id}
         SoldOut= {item.openSpots}
         CoverImg={item.coverImg} 
         Rate={item.stats.rating}
         People={item.stats.reviewCount}
         Location={item.location}
         Title={item.title}
         Price={item.price}
         />)}
      </div>
    </div>
  );
}
