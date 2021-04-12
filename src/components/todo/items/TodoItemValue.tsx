import {
  FC,
  FocusEventHandler,
  MouseEventHandler,
  useState,
  ChangeEventHandler,
  useRef,
  useLayoutEffect,
} from "react";
import { useActions } from "../../../store/hooks";
import ITodo from "../../../types/interfaces/ITodo";

type EditTools = {
  isEditing: boolean;
  setIsEditing: (newState: boolean) => void;
};

interface ITodoItemValueProps {
  todo: ITodo;

  editTools: EditTools;
}

const TodoItemValue: FC<ITodoItemValueProps> = ({ todo, editTools }) => {
  const { updateTodoValueById } = useActions();
  const { id, value, isActive } = todo;
  const { isEditing, setIsEditing } = editTools;

  const inputRef = useRef<HTMLInputElement>(null);

  const [currentInputValue, setCurrentInputValue] = useState<string>(value);

  const handleDoubleClickOnParagraph: MouseEventHandler<HTMLParagraphElement> = () =>
    setIsEditing(true);

  const handleChangeOnInput: ChangeEventHandler<HTMLInputElement> = e =>
    setCurrentInputValue(e.target.value);

  const handleBlurOnInput: FocusEventHandler<HTMLInputElement> = () => {
    updateTodoValueById(currentInputValue, id);
    setIsEditing(false);
  };

  useLayoutEffect(() => {
    if (isEditing && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return isEditing ? (
    <input
      type="text"
      className="todo-list-item-value"
      ref={inputRef}
      value={currentInputValue}
      onChange={handleChangeOnInput}
      onBlur={handleBlurOnInput}
    />
  ) : (
    <p
      className={`todo-list-item-value ${!isActive && "strikethrough"}`}
      onDoubleClick={handleDoubleClickOnParagraph}
    >
      {value}
    </p>
  );
};

export default TodoItemValue;
