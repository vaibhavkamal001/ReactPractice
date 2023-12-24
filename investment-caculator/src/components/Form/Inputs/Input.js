import "./Input.css";
export function Input(props) {
  return <input type={props.type} id={props.id} onChange={props.onChange} />;
}
