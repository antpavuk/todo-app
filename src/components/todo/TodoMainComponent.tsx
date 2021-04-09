import React, { FC, useContext } from "react";
import {
  FilterActivityContext,
  FilterActivityStatus,
} from "../../api/context/FilterTodosActivityContext";
import { TodosContext } from "../../api/context/TodosContext";
import Filter from "./filter/Filter";
import TodoForm from "./TodoForm";
import TodoItem from "./items/TodoItem";

const TodoMainComponent: FC = () => {
  const { todos } = useContext(TodosContext);
  const { filterActivityStatus: filterTodosActivityStatus } = useContext(
    FilterActivityContext
  );

  return (
    <section className="main">
      <TodoForm />
      <div className="todo-list">
        {todos &&
          todos
            .filter(
              todo =>
                !filterTodosActivityStatus ||
                (filterTodosActivityStatus === FilterActivityStatus.ACTIVE &&
                  todo.isActive) ||
                (filterTodosActivityStatus === FilterActivityStatus.COMPLETED &&
                  !todo.isActive)
            )
            .map((todo, i) => <TodoItem key={i} {...{ todo, i }} />)}
      </div>
      {todos.length !== 0 && <Filter />}
    </section>
  );
};

export default TodoMainComponent;
