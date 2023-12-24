import { useState } from "react";
import { Form } from "./components/Form/Form.js";
import { Header } from "./components/Header/Header.js";
import { Table } from "./components/Table/Table.js";
function App() {
  const [enteredDate, setEnteredDate] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setEnteredDate(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form calculateHandler={calculateHandler} />
      {enteredDate.length > 0 ? <Table Data={enteredDate} /> : ""}
    </div>
  );
}

export default App;
