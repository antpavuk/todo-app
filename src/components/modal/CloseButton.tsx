import { FC } from "react";
import { MouseEventHandler } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CloseButton: FC<Props> = ({ onClick }) => (
  <button className="close-button" onClick={onClick}>
    <IoCloseCircleOutline className="close-button-icon" size={20} />
  </button>
);

export default CloseButton;
