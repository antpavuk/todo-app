import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { ContextType, TodosContext } from "../../api/context/TodosContext";
import ITodo from "../../api/Todo";
import CompleteButton from "../todo/buttons/CompleteButton";

const TodoForm: FC = () => {
  const {
    todos,
    addTodo,
    activateAllTodos,
    completeAllTodos,
  } = useContext<ContextType>(TodosContext);
  const [todoInputValue, setTodoInputValue] = useState<string>("");

  const isEachTodoCompleted = todos.some(({ isActive }) => !isActive);

  const handleTodoElementOnChange: ChangeEventHandler<HTMLInputElement> = e =>
    setTodoInputValue(e.target.value);

  const handleAddTodo: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const todo: ITodo = {
      value: todoInputValue,
      isActive: true,
    };
    addTodo(todo);
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
