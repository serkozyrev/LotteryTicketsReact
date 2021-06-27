import React, { useContext } from "react";

import NumbersContext from "./context/numbers-context";

import "./MoneyValue.css";
const MoneyValue = () => {
  const { total, setTotal, ticketIsValid } = useContext(NumbersContext);

  const incrementByOne = () => {
    setTotal(total + 1);
  };

  const incrementByFive = () => {
    setTotal(total + 5);
  };

  const incrementByTen = () => {
    setTotal(total + 10);
  };

  const incrementByTwenty = () => {
    setTotal(total + 20);
  };
  return (
    <div className="money-value">
      <p className="amount">Ticket Value:</p>
      <button
        className="money-button"
        onClick={incrementByOne}
        disabled={!ticketIsValid}
      >
        1
      </button>
      <button
        className="money-button"
        onClick={incrementByFive}
        disabled={!ticketIsValid}
      >
        5
      </button>
      <button
        className="money-button"
        onClick={incrementByTen}
        disabled={!ticketIsValid}
      >
        10
      </button>
      <button
        className="money-button"
        onClick={incrementByTwenty}
        disabled={!ticketIsValid}
      >
        20
      </button>
    </div>
  );
};

export default MoneyValue;
