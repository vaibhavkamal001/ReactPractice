import "./Lable.css";
export function Lable(props) {
  return <label htmlFor={props.htmlFor}>{props.Lable}</label>;
}
