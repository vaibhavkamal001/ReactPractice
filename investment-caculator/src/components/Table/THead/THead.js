import "./THead.css";
export function THead(props) {
  const headList = props.headList.map((e) => <th key={e}>{e}</th>);
  return (
    <thead>
      <tr>{headList}</tr>
    </thead>
  );
}
