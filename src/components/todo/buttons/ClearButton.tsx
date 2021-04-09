import { FC } from "react";
import IButtonProps from "./IButtonProps";

const ClearButton: FC<IButtonProps> = ({ isActive, onClick }) => {
  return (
    <button
      className={`clear-button ${!isActive && ` hidden`}`}
      onClick={onClick}
    >
      Clear completed
    </button>
  );
};

export default ClearButton;
