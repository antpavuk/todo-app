import { FC } from "react";
import Filter from "./filter/Filter";
import TodoForm from "./TodoForm";
import TodoItem from "./items/TodoItem";
import useFilteredTodosSelector from "../../store/hooks/ selectors/useFilteredTodosSelector";
import useIsAnyTodoExistedSelector from "../../store/hooks/ selectors/useIsAnyTodoExisted";

const TodoMainComponent: FC = () => {
  const filteredTodos = useFilteredTodosSelector();

  const isAnyTodoExisted = useIsAnyTodoExistedSelector();

  return (
    <section className="main">
      <TodoForm />
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} {...{ todo }} />
        ))}
      </div>
      {isAnyTodoExisted && <Filter />}
    </section>
  );
};

export default TodoMainComponent;
