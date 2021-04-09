import { FC, MouseEventHandler } from "react";

interface ITodoItemCheckboxProps {
  isActive: boolean;
  onClick: MouseEventHandler<HTMLInputElement>;
}
const TodoItemCheckbox: FC<ITodoItemCheckboxProps> = ({
  isActive,
  onClick,
}) => (
  <input
    className="status-box"
    type="checkbox"
    checked={!isActive}
    onClick={onClick}
  />
);

export default TodoItemCheckbox;
