import { FC } from "react";
import ITodoButtonProps from "./ITodoButtonProps";

const ClearButton: FC<ITodoButtonProps> = ({ isActive, onClick }) => {
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
