import { FC } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import ITodoButtonProps from "./ITodoButtonProps";

const CompleteButton: FC<ITodoButtonProps> = ({ isActive, onClick }) => (
  <button
    className={`complete-button ${isActive && "active"}`}
    type="button"
    onClick={onClick}
  >
    <RiArrowDownSLine />
  </button>
);

export default CompleteButton;
