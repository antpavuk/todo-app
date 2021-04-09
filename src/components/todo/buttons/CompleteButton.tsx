import { FC } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import IButtonProps from "./IButtonProps";

const CompleteButton: FC<IButtonProps> = ({ isActive, onClick }) => (
  <button
    className={`complete-button ${isActive && "active"}`}
    type="button"
    onClick={onClick}
  >
    <RiArrowDownSLine />
  </button>
);

export default CompleteButton;
