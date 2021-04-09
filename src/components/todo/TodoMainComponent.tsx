import React, { FC, useContext, useMemo } from "react";
import {
  FilterActivityContext,
  FilterActivityStatus,
} from "../../store/context/FilterTodosActivityContext";
import { TodosContext } from "../../store/context/TodosContext";
import Filter from "./filter/Filter";
import TodoForm from "./TodoForm";
import TodoItem from "./items/TodoItem";

const TodoMainComponent: FC = () => {
  const { todos } = useContext(TodosContext);
  const { filterActivityStatus: filterTodosActivityStatus } = useContext(
    FilterActivityContext
  );

  const isAnyTodoExisted = useMemo(() => todos.length !== 0, [todos.length]);

  return (
    <section className="main">
      <TodoForm />
      <div className="todo-list">
        {useMemo(
          () =>
            todos.filter(
              todo =>
                !filterTodosActivityStatus ||
                (filterTodosActivityStatus === FilterActivityStatus.ACTIVE &&
                  todo.isActive) ||
                (filterTodosActivityStatus === FilterActivityStatus.COMPLETED &&
                  !todo.isActive)
            ),
          [todos, filterTodosActivityStatus]
        ).map((todo, index) => (
          <TodoItem key={index} {...{ todo, index }} />
        ))}
      </div>
      {isAnyTodoExisted && <Filter />}
    </section>
  );
};

export default TodoMainComponent;
