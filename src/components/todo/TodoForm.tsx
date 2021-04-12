import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import useIsEachTodoCompletedSelector from "../../store/hooks/ selectors/useIsEachTodoCompletedSelector";
import useActions from "../../store/hooks/useActions";
import CompleteButton from "../todo/buttons/CompleteButton";

const TodoForm: FC = () => {
  const { addTodo, activateAllTodos, completeAllTodos } = useActions();
  const [todoInputValue, setTodoInputValue] = useState<string>("");

  const isEachTodoCompleted = useIsEachTodoCompletedSelector();

  const handleTodoElementOnChange: ChangeEventHandler<HTMLInputElement> = e =>
    setTodoInputValue(e.target.value);

  const handleAddTodo: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    addTodo(todoInputValue);
    setTodoInputValue("");
  };

  const handleAllTodosActivity = () => {
    if (isEachTodoCompleted) {
      activateAllTodos();
    } else {
      completeAllTodos();
    }
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
