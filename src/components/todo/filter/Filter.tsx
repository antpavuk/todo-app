import React, { FC, useContext } from "react";
import { TodosContext } from "../../../api/context/TodosContext";
import ClearButton from "../buttons/ClearButton";
import FilterItems from "./FilterItems";
import TodoFilterTrack from "./TodoFilterTrack";

const Filter: FC = () => {
  const { todos, clearCompletedTodos } = useContext(TodosContext);

  const isEachTodoCompleted = todos.some(({ isActive }) => !isActive);
  const todoItemsLeft = todos.filter(({ isActive }) => isActive).length;

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
