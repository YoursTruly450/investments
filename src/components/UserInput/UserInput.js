import { useState } from "react";

import './UserInput.css';

export const UserInput = ({ onCalculate }) => {

  const initialUserInput = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    onCalculate(userInput);
    resetHandler();
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => ({
      ...prev,
      [input]: value,
    }));
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            id="current-savings"
            value={userInput.currentSavings}
            type="number"
            onChange={event => inputChangeHandler('currentSavings', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            type="number"
            onChange={event => inputChangeHandler('yearlyContribution', event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            id="expected-return"
            value={userInput.expectedReturn}
            type="number" 
            onChange={event => inputChangeHandler('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            id="duration"
            value={userInput.duration}
            type="number"
            onChange={event => inputChangeHandler('duration', event.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};