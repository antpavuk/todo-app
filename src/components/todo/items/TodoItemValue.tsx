import {
  FC,
  FocusEventHandler,
  MouseEventHandler,
  useState,
  useContext,
  ChangeEventHandler,
  useRef,
  useLayoutEffect,
} from "react";
import { TodosContext } from "../../../store/context/TodosContext";
import ITodo from "../../../types/interfaces/ITodo";

type EditTools = {
  isEditing: boolean;
  setIsEditing: (newState: boolean) => void;
};

interface ITodoItemValueProps {
  todo: ITodo;
  index: number;
  editTools: EditTools;
}

const TodoItemValue: FC<ITodoItemValueProps> = ({ todo, index, editTools }) => {
  const { changeTodoValueByIndex } = useContext(TodosContext);
  const { value, isActive } = todo;
  const { isEditing, setIsEditing } = editTools;

  const inputRef = useRef<HTMLInputElement>(null);

  const [currentInputValue, setCurrentInputValue] = useState<string>(value);

  const handleDoubleClickOnParagraph: MouseEventHandler<HTMLParagraphElement> = () =>
    setIsEditing(true);

  const handleChangeOnInput: ChangeEventHandler<HTMLInputElement> = e =>
    setCurrentInputValue(e.target.value);

  const handleBlurOnInput: FocusEventHandler<HTMLInputElement> = () => {
    changeTodoValueByIndex(currentInputValue, index);
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
