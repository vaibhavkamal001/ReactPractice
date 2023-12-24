export function Row(props) {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  const tdata = props.tData.map((e) => (
    <td key={Math.random(e, 1000)}>
      {typeof e == "string" ? e : numberFormat(e)}
    </td>
  ));
  return <tr>{tdata}</tr>;
}
