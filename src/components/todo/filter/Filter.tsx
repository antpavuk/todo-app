import { FC, useMemo } from "react";
import { useActions, useRootStateSelector } from "../../../store/hooks";
import ClearButton from "../buttons/ClearButton";
import FilterItems from "./FilterItems";
import TodoFilterTrack from "./TodoFilterTrack";

const Filter: FC = () => {
  const { todos } = useRootStateSelector(state => state);
  const { clearCompletedTodos } = useActions();

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
    <footer className="todo-list-filter active">
      <TodoFilterTrack todoItemsLeft={todoItemsLeft} />
      <FilterItems />
      <ClearButton
        isActive={isEachTodoCompleted}
        onClick={handleClearCompletedTodos}
      />
    </footer>
  );
};

export default Filter;
