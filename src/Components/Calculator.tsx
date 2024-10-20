import React, { useState } from "react";
import styled from "styled-components";

// Styled components for the calculator container
const CalcContainer = styled.div`
  width: 100%;
  text-align: center;
`;

// Styled component for the title of the calculator
const CalcTitle = styled.h1`
  font-size: calc(5px + 1.5vw); /* Responsive font size */
  color: #fbd0d9;
  margin-bottom: 20px;
`;

// Styled component for the input box
const InputBox = styled.input`
  width: 100%; /* Full width input */
  padding: 10px;
  font-size: calc(5px + 1.5vw); /* Responsive font size */
  margin-bottom: 15px;
  border: 1px solid #f2738c;
  border-radius: 5px;
  background-color: #fff;
  color: #fbd0d9; /* Text color */
`;

// Styled component for button container (to align buttons)
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center; /* Center the buttons */
`;

// Styled component for individual buttons
const Button = styled.button`
  width: 60px; /* Fixed width for buttons */
  padding: 10px;
  font-size: 18px;
  background-color: #f2738c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f58fa6; /* Change color on hover */
  }
`;

// Calculator functional component
export default function Calculator() {
  // useState hook to manage the first number input
  const [first, setFirst] = useState<number | "">("");

  // useState hook to manage the second number input
  const [second, setSecond] = useState<number | "">("");

  // useState hook to manage the result (either number or string for error handling)
  const [result, setResult] = useState<number | string>("");

  // Function for performing addition
  const addition = () => setResult(Number(first) + Number(second));

  // Function for performing subtraction
  const subtraction = () => setResult(Number(first) - Number(second));

  // Function for performing multiplication
  const multiplication = () => setResult(Number(first) * Number(second));

  // Function for performing division (with check to avoid division by zero)
  const division = () => {
    if (Number(second) === 0) {
      setResult("Cannot divide by zero");
      return;
    }
    setResult(Number(first) / Number(second));
  };

  // Function to clear both inputs and the result
  const clearCalc = () => {
    setFirst("");
    setSecond("");
    setResult("");
  };

  return (
    <CalcContainer>
      {/* Title of the calculator */}
      <CalcTitle>Calculator</CalcTitle>

      {/* Input for the first number */}
      <label htmlFor="first-number">First Number: </label>
      <InputBox
        type="number"
        id="first-number"
        value={first}
        onChange={(e) => setFirst(e.target.value === "" ? "" : Number(e.target.value))} // Ensure empty string for no input, else convert to number
      />

      {/* Input for the second number */}
      <label htmlFor="second-number">Second Number: </label>
      <InputBox
        type="number"
        id="second-number"
        value={second}
        onChange={(e) => setSecond(e.target.value === "" ? "" : Number(e.target.value))} // Ensure empty string for no input, else convert to number
      />

      {/* Buttons for the arithmetic operations and clear function */}
      <ButtonContainer>
        <Button onClick={addition}>+</Button>
        <Button onClick={subtraction}>-</Button>
        <Button onClick={multiplication}>*</Button>
        <Button onClick={division}>/</Button>
        <Button onClick={clearCalc}>Clear</Button> {/* Clear inputs and result */}
      </ButtonContainer>

      {/* Display the result. If the result is a negative number, display it in red */}
      <h3
        id="output"
        style={{ color: typeof result === "number" && result < 0 ? "red" : "black" }} // Red for negative results
      >
        {result} {/* Show result or error message */}
      </h3>
    </CalcContainer>
  );
}
