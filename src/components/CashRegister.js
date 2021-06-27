import React, { useState } from "react";

import "./CashRegister.css";
import NumbersContext from "./context/numbers-context";
import MoneyValue from "./MoneyValue";
import TicketNumbersSection from "./TicketNumbersSection";

const CashRegister = (props) => {
  const ticketNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [invalidTotal, setInvalidTotal] = useState(false);
  const [total, setTotal] = useState(0);
  const [numbersShown, setNumbersShown] = useState(false);
  const [ticketIsValid, setTicketIsValid] = useState(true);
  const [manyNumbers, setManyNumbers] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);

  return (
    <NumbersContext.Provider
      value={{
        total,
        setTotal,
        invalidTotal,
        setInvalidTotal,
        allowSubmit,
        setAllowSubmit,
        selectedNumbers,
        ticketIsValid,
        setTicketIsValid,
        setNumbersShown,
        setManyNumbers,
        setSelectedNumbers,
        ticketNumbers,
      }}
    >
      <div className="main-container">
        <header className="header">
          <h2>Lottery Tickets</h2>
        </header>
        <div className="ticket-container">
          <MoneyValue />
          <TicketNumbersSection />
        </div>
        <div className="selected-number">
          Numbers Selected:
          <p>{selectedNumbers + " "}</p>
          <p>Total Price: {total}</p>
          {manyNumbers && ticketIsValid && (
            <p>Please select not more then 5 numbers per a ticket!!!</p>
          )}
          {ticketIsValid === false && manyNumbers === false && (
            <p>Please select 5 numbers before assigning value to the ticket!</p>
          )}
          {numbersShown && !manyNumbers && (
            <p>
              Selected numbers are {selectedNumbers + " "} and the price for the
              ticket is {total}
            </p>
          )}
        </div>
      </div>
    </NumbersContext.Provider>
  );
};

export default CashRegister;
