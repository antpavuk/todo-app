import { FC } from "react";
import useIsEachTodoCompletedSelector from "../../../store/hooks/ selectors/useIsEachTodoCompletedSelector";
import { useTodoItemsLeftSelector } from "../../../store/hooks/ selectors/useTodoItemsLeftSelector";
import useActions from "../../../store/hooks/useActions";
import ClearButton from "../buttons/ClearButton";
import FilterItems from "./FilterItems";
import TodoFilterTrack from "./TodoFilterTrack";

const Filter: FC = () => {
  const { clearCompletedTodos } = useActions();

  const isEachTodoCompleted = useIsEachTodoCompletedSelector();
  const todoItemsLeft = useTodoItemsLeftSelector();

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
