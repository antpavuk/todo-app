import React, { FC, useContext, useMemo } from "react";
import { TodosContext } from "../../../store/context/TodosContext";
import ClearButton from "../buttons/ClearButton";
import FilterItems from "./FilterItems";
import TodoFilterTrack from "./TodoFilterTrack";

const Filter: FC = () => {
  const { todos, clearCompletedTodos } = useContext(TodosContext);

  const isEachTodoCompleted = useMemo(
    () => todos.some(({ isActive }) => !isActive),
    [todos]
  );
  const todoItemsLeft = useMemo(
    () => todos.filter(({ isActive }) => isActive).length,
    [todos]
  );

  const handleClearCompletedTodos = () => clearCompletedTodos();

  return (
    <div className="todo-list-filter active">
      <TodoFilterTrack todoItemsLeft={todoItemsLeft} />
      <FilterItems />
      <ClearButton
        isActive={isEachTodoCompleted}
        onClick={handleClearCompletedTodos}
      />
    </div>
  );
};

export default Filter;
