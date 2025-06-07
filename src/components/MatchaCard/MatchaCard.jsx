import React from "react";

export const MatchaCard = ({ title, description, image, flipped, onClick }) => {
  return (
    <div className="card-flip" onClick={onClick}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div
          className="card-front"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
