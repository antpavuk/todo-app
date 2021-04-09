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
import { TodosContext } from "../../../api/context/TodosContext";
import ITodo from "../../../api/Todo";

type EditTools = {
  isEditing: boolean;
  setIsEditing: (newState: boolean) => void;
};

interface ITodoItemValueProps {
  todo: ITodo;
  i: number;
  editTools: EditTools;
}

const TodoItemValue: FC<ITodoItemValueProps> = ({ todo, i, editTools }) => {
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
    changeTodoValueByIndex(currentInputValue, i);
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
