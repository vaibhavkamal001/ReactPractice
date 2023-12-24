import { TBody } from "./TBody/TBody";
import { THead } from "./THead/THead";
import "./Table.css";

export function Table(props) {
  const headingList = [
    "Year",
    "Total Savings",
    "Interest (Year)",
    "Total Interest",
    // "Invested Capital",
  ];

  return (
    <table className="result">
      <THead headList={headingList} />
      <TBody calculatedData={props.Data} />
    </table>
  );
}
