import React, { useState } from "react";
import "./facts.css";
import { MatchaCard } from "../../components/MatchaCard/matchacard";
import { facts } from "./factsData";


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
          <MatchaCard
            key={index}
            title={fact.title}
            description={fact.description}
            image={fact.image}
            flipped={flipped[index]}
            onClick={() => handleFlip(index)}
          />
        ))}
      </div>
    </section>
  );
};

