import { Row } from "./Row/Row";

export function TBody(props) {
  const tData = [
    "YEAR NUMBER",
    "TOTAL SAVINGS END OF YEAR",
    "INTEREST GAINED IN YEAR",
    "TOTAL INTEREST GAINED",
    // "TOTAL INVESTED CAPITAL",
  ];
  const calculatedListData = props.calculatedData.map((e) => {
    return [e.year, e.savingsEndOfYear, e.yearlyInterest, e.yearlyContribution];
  });

  return (
    <tbody>
      <Row key={Math.random(1, 1000)} tData={tData} />
      {calculatedListData.map((e) => (
        <Row key={Math.random(1, 1000)} tData={e} />
      ))}
    </tbody>
  );
}
