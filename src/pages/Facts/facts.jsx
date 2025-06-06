import React, { useState } from "react";
import "./facts.css";

const facts = [
  {
    title: "Co je to matcha?",
    description:
      "Matcha obsahuje 137x více antioxidantů než běžný zelený čaj!",
    image: "/img/matcha1.jpg",
  },
  {
    title: "Rituál, ne jen nápoj",
    description:
      "Tradiční matcha obřady trvají i přes 30 minut a jsou kulturní událostí.",
    image: "/img/matcha2.jpg",
  },
  {
    title: "Plná energie bez crashů",
    description:
      "Díky L-theaninu tě matcha nakopne, ale zároveň uklidní – win-win!",
    image: "/img/matcha3.jpg",
  },
];

export const Facts = () => {
  const [flipped, setFlipped] = useState(Array(facts.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className="matcha-section">
      <div className="intro">
        <h2>Poznej matchu</h2>
        <p>Objev fascinující svět zeleného prášku</p>
      </div>

      <div className="cards">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="card-flip"
            onClick={() => handleFlip(index)}
          >
            <div className={`card-inner ${flipped[index] ? "flipped" : ""}`}>
              <div
                className="card-front"
                style={{
                  backgroundImage: `url(${fact.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                }}
              >
                <h3>{fact.title}</h3>
              </div>
              <div className="card-back">
                <p>{fact.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

