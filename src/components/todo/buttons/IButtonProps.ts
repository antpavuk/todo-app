import { MouseEventHandler } from "react";

export default interface IButtonProps {
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
