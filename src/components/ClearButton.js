import React, { useContext } from "react";

import NumbersContext from "./context/numbers-context";
import "./ClearButton.css";

const ClearButton = () => {
  const {
    setTotal,
    setSelectedNumbers,
    setNumbersShown,
    setTicketIsValid,
    setManyNumbers,
    setInvalidTotal,
    setAllowSubmit,
  } = useContext(NumbersContext);
  const clearHandler = () => {
    setTotal(0);
    setSelectedNumbers("");
    setTicketIsValid(true);
    setManyNumbers(false);
    setNumbersShown(false);
    setInvalidTotal(false);
    setAllowSubmit(false);
  };
  return (
    <button className="ticket-clear" onClick={clearHandler}>
      Clear
    </button>
  );
};

export default ClearButton;
