import React from "react";

export default function Card(props) {
  let BedgeText;
  if (props.item.openSpots === 0) {
    BedgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    BedgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img
        src={`../images/${props.item.coverImg}`}
        className="card--image"
        alt={props.item.title}
      />
      <div className="card--stats">
        <img
          src={"../images/star.png"}
          className="card--star"
          alt="star for rating"
        />
        {BedgeText && <div className="bedgeText">{BedgeText}</div>}
        <span className="rating">{props.item.stats.rating} </span>
        <span className="gray"> ({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="title">{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
