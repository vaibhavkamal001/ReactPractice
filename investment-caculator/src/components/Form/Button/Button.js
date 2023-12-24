import "./Button.css";
export function Button(props) {
  return (
    <button type={props.type} className={props.className}>
      {props.title}
    </button>
  );
}
