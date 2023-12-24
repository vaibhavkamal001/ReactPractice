import { Button } from "./Button/Button";
import { Input } from "./Inputs/Input";
import { Lable } from "./Lable/Lable";
import "./Form.css";
import { useState } from "react";

export function Form(props) {
  const [currentSaving, setCurrentSaving] = useState();
  const [yearlyContribution, setYearlyContribution] = useState();
  const [expectedReturn, setExpectedReturn] = useState();
  const [duration, setDuration] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const userInput = {
      "current-savings": currentSaving,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      duration: duration,
    };
    props.calculateHandler(userInput);
  };

  const resetHandler = (event) => {
    setCurrentSaving(0);
    setYearlyContribution(0);
    setExpectedReturn(0);
    setDuration(0);
    props.calculateHandler([]);
  };

  const currentSavingChangeHandler = (event) => {
    setCurrentSaving(event.target.value);
  };
  const yearlyContributionChangeHandler = (event) => {
    setYearlyContribution(event.target.value);
  };
  const expectedReturnChangeHandler = (event) => {
    setExpectedReturn(event.target.value);
  };
  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  return (
    <form className="form" onSubmit={submitHandler} onReset={resetHandler}>
      <div className="input-group">
        <p>
          <Lable htmlFor="current-savings" Lable="Current Savings ($)" />
          <Input
            type="number"
            id="current-savings"
            value={currentSaving}
            onChange={currentSavingChangeHandler}
          />
        </p>
        <p>
          <Lable htmlFor="yearly-contribution" Lable="Yearly Savings ($)" />
          <Input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={yearlyContributionChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <Lable
            htmlFor="expected-return"
            Lable="Expected Interest (%, per year)"
          />
          <Input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={expectedReturnChangeHandler}
          />
        </p>
        <p>
          <Lable htmlFor="duration" Lable="Investment Duration (years)" />
          <Input
            type="number"
            id="duration"
            value={duration}
            onChange={durationChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <Button type="reset" className="buttonAlt" title="Reset" />
        <Button type="submit" className="button" title="Calculate" />
      </p>
    </form>
  );
}
