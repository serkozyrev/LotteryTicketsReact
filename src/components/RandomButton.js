import React, { useContext } from "react";

import NumberContext from "./context/numbers-context";
import "./RandomButton.css";

const RandomButton = () => {
  const { setSelectedNumbers } = useContext(NumberContext);

  const randomNumbers = () => {
    const randomNumberArray = [];
    for (let i = 0; i <= 5; i++) {
      let arrayElement = Math.floor(Math.random() * (21 - 1) + 1);
      if (randomNumberArray.find((number) => number === arrayElement)) {
        arrayElement = Math.floor(Math.random() * (21 - 1) + 1);
      }
      setSelectedNumbers((prevState) => {
        return [...prevState, arrayElement];
      });
    }
  };
  return (
    <button className="random-button" onClick={randomNumbers}>
      Random 5 numbers
    </button>
  );
};

export default RandomButton;
