import { MouseEventHandler } from "react";

export default interface ITodoButtonProps {
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
