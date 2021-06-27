import React, { useContext, useEffect } from "react";

import NumbersContext from "./context/numbers-context";
import SubmitButton from "./SubmitButton";
import ClearButton from "./ClearButton";
import RandomButton from "./RandomButton";
import "./TicketNumbersSection.css";

const TicketNumbersSection = () => {
  const {
    total,
    setInvalidTotal,
    ticketNumbers,
    setSelectedNumbers,
    selectedNumbers,
    setTicketIsValid,
    setManyNumbers,
    setAllowSubmit,
  } = useContext(NumbersContext);

  const selectedItemHandler = (e) => {
    e.preventDefault();

    setSelectedNumbers((prevSelectedNumbers) => {
      return [...prevSelectedNumbers, e.target.value];
    });

    if (selectedNumbers.length !== 0) {
      const arrayNumber = selectedNumbers.find(
        (number) => number === e.target.value
      );
      if (arrayNumber) {
        const newSelectedNumbers = selectedNumbers.filter(
          (item) => item !== arrayNumber
        );
        setSelectedNumbers(newSelectedNumbers);
      }
    }
  };

  useEffect(() => {
    if (selectedNumbers.length > 5) {
      setManyNumbers(true);
      setSelectedNumbers(selectedNumbers.slice(0, 5));
      return;
    }
    if (selectedNumbers.length < 5) {
      setManyNumbers(false);
      setTicketIsValid(false);
      setAllowSubmit(false);
      return;
    }
    if (total === 0) {
      setInvalidTotal(true);
      setTicketIsValid(true);
      return;
    }
    if (total > 0 && selectedNumbers.length === 5) {
      setInvalidTotal(false);
      setTicketIsValid(true);
      setAllowSubmit(true);
    }
    if (selectedNumbers.length === 5) {
      setTicketIsValid(true);
    }
  }, [
    total,
    setAllowSubmit,
    selectedNumbers,
    setSelectedNumbers,
    setTicketIsValid,
    setManyNumbers,
    setInvalidTotal,
  ]);

  return (
    <div className="ticket-numbers">
      {ticketNumbers.map((number, index) => (
        <button
          key={index}
          className="ticket-button"
          onClick={selectedItemHandler}
          value={number}
        >
          {number}
        </button>
      ))}
      <SubmitButton />
      <ClearButton />
      <RandomButton />
    </div>
  );
};

export default TicketNumbersSection;
