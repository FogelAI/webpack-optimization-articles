import "./Button.css";

export function Button(props) {
  return (
    <button className={"Button " + props.className}>{props.children}</button>
  );
}
