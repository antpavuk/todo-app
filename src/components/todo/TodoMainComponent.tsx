import { FC, useMemo } from "react";
import Filter from "./filter/Filter";
import TodoForm from "./TodoForm";
import TodoItem from "./items/TodoItem";
import FilterActivityStatus from "../../types/enum/FilterActivityStatus";
import { useRootStateSelector } from "../../store/hooks";

const TodoMainComponent: FC = () => {
  const { todos, filterTodosActivityStatus } = useRootStateSelector(
    state => state
  );

  const filteredTodos = useMemo(
    () =>
      todos.filter(
        todo =>
          filterTodosActivityStatus === FilterActivityStatus.ALL ||
          (filterTodosActivityStatus === FilterActivityStatus.ACTIVE &&
            todo.isActive) ||
          (filterTodosActivityStatus === FilterActivityStatus.COMPLETED &&
            !todo.isActive)
      ),
    [todos, filterTodosActivityStatus]
  );
  const isAnyTodoExisted = useMemo(() => todos.length !== 0, [todos.length]);

  return (
    <section className="main">
      <TodoForm />
      <div className="todo-list">
        {filteredTodos.map((todo, index) => (
          <TodoItem key={index} {...{ todo, index }} />
        ))}
      </div>
      {isAnyTodoExisted && <Filter />}
    </section>
  );
};

export default TodoMainComponent;
