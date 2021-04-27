import { createSelector } from "reselect";
import ITodo from "../../../types/interfaces/ITodo";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

export const useTodoItemsLeftSelector = () => {
  const todoItemsLeftSelector = createSelector<RootState, ITodo[], number>(
    state => state.todo.todos,
    todos => todos.filter(({ isActive }) => isActive).length
  );

  return useTypedSelector(todoItemsLeftSelector);
};
