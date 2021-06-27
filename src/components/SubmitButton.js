import React, { useContext } from "react";

import NumbersContext from "./context/numbers-context";
import "./SubmitButton.css";

const SubmitButton = () => {
  const { setNumbersShown, setManyNumbers, allowSubmit } =
    useContext(NumbersContext);

  const submitHandler = () => {
    setNumbersShown(true);
    setManyNumbers(false);
  };
  return (
    <button
      className="ticket-cash"
      disabled={!allowSubmit}
      onClick={submitHandler}
    >
      Cash
    </button>
  );
};

export default SubmitButton;
