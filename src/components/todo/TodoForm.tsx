import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useMemo,
  useState,
} from "react";
import { useActions, useRootStateSelector } from "../../store/hooks";
import CompleteButton from "../todo/buttons/CompleteButton";

const TodoForm: FC = () => {
  const { todos } = useRootStateSelector(state => state);
  const { addTodo, activateAllTodos, completeAllTodos } = useActions();
  const [todoInputValue, setTodoInputValue] = useState<string>("");

  const isEachTodoCompleted = useMemo(
    () => todos.some(({ isActive }) => !isActive),
    [todos]
  );

  const handleTodoElementOnChange: ChangeEventHandler<HTMLInputElement> = e =>
    setTodoInputValue(e.target.value);

  const handleAddTodo: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    addTodo(todoInputValue);
    setTodoInputValue("");

    console.log(todos);
  };

  const handleAllTodosActivity = () => {
    const isEachTodoCompleted = todos.some(({ isActive }) => !isActive);

    if (isEachTodoCompleted) {
      activateAllTodos();
    } else {
      completeAllTodos();
    }

    console.log(todos);
  };

  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      <div className="form-group">
        <CompleteButton
          isActive={isEachTodoCompleted}
          onClick={handleAllTodosActivity}
        />
        <input
          name="todo-element"
          id="todo-element"
          type="text"
          placeholder="What needs to be done?"
          value={todoInputValue}
          onChange={handleTodoElementOnChange}
        />
      </div>
    </form>
  );
};

export default TodoForm;
