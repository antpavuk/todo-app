import { FC } from "react";
import { RiCloseFill } from "react-icons/ri";
import ITodoButtonProps from "./ITodoButtonProps";

const DeleteButton: FC<ITodoButtonProps> = ({ isActive, onClick }) => {
  if (!isActive) return null;
  return (
    <button
      className={`delete-button ${!isActive && ` hidden`}`}
      onClick={onClick}
    >
      <RiCloseFill />
    </button>
  );
};

export default DeleteButton;
