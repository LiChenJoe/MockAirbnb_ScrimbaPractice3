import React from "react";
import star from "../images/star.png";

export default function Card({ Img, Rate, People, Country, Title, Price }) {
  return (
    <div className="card">
      <img
        src={`../images/${Img}`}
        className="card--image"
        alt="Katie Zaferes"
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star for rating" />
        <span>{Rate}</span>
        <span className="gray">({People}) • </span>
        <span className="gray">{Country}</span>
      </div>
      <p>{Title}</p>
      <p>
        <span className="bold">From ${Price}</span> / person
      </p>
    </div>
  );
}
