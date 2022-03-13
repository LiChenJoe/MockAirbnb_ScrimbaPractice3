import React from "react";

export default function Card({ CoverImg,SoldOut, Rate, People, Location, Title, Price }) {
  return (
    <div className="card">
      <img
        src={`../images/${CoverImg}`}
        className="card--image"
        alt={Title}
      />
      <div className="card--stats">
        <img src={"../images/star.png"} className="card--star" alt="star for rating" />
       <div className="SoldOut">{SoldOut== 0&& "Sold Out"}</div>
        <span>{Rate} </span>
        <span className="gray"> ({People}) • </span>
        <span className="gray">{Location}</span>
      </div>
      <p className="title">{Title}</p>
      <p>
        <span className="bold">From ${Price}</span> / person
      </p>
    </div>
  );
}
