import React from "react";
import "../Card.css";

function Cards({ item }) {
  return (
    <>
      <div className="card">
        <img src={item.image} className="card-img-top" alt="Book" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.title}</p>
          <a href="/" className="btn btn-primary">
            Get Free
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
