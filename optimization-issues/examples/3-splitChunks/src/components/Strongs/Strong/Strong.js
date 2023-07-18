import "./Strong.css";

export function Strong(props) {
  return (
    <strong className={"Strong " + props.className}>{props.children}</strong>
  );
}
