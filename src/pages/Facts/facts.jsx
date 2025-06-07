import React, { useState } from "react";
import "./facts.css";
import { MatchaCard } from "../../components/MatchaCard/matchacard";

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

