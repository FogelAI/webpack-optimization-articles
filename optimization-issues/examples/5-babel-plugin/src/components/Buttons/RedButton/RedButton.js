import { Button } from "../Button/Button";
import "./RedButton.css";

export function RedButton(props) {
  return <Button className="RedButton">{props.children}</Button>;
}
