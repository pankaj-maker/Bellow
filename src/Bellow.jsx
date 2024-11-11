import React from "react";
import Accordion from "./Accordion";

function Bellow() {
  const data = [
    {
      title: "Marvels",
      description:
        "Marvels are fictional characters that appear in comic books published by Marvel Comics.",
    },
    {
      title: "DC",
      description:
        "DC is an American comic book series created by George Pérez and Alan Moore, published by DC Comics.",
    },
    {
      title: "Batman",
      description: "Batman is a fictional character in the DC Comics universe.",
    },
    {
      title: "Superman",
      description:
        "Superman is a fictional character in the DC Comics universe.",
    },
  ];

  const accordion=[];
  for (let i = 0; i < data.length; i++) {
    accordion.push(
      <Accordion
        key={i}
        title={data[i].title}
        description={data[i].description}
        isOpen={i === 0}
      />
    );
  }
  return (
    <div className="border-2 border-zinc-200 rounded-lg">
      {accordion}
    </div>
  );
}

export default Bellow;
