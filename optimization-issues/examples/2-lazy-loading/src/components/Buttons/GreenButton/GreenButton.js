import { Button } from "../Button/Button";
import "./GreenButton.css";

export function GreenButton(props) {
  return <Button className="GreenButton">{props.children}</Button>;
}
