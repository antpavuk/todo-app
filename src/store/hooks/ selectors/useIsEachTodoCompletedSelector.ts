import { createSelector } from "reselect";
import ITodo from "../../../types/interfaces/ITodo";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

const useIsEachTodoCompletedSelector = () => {
  const isEachTodoCompletedSelector = createSelector<
    RootState,
    ITodo[],
    boolean
  >(
    state => state.todo.todos,
    todos => todos.some(({ isActive }) => !isActive)
  );
  return useTypedSelector(isEachTodoCompletedSelector);
};

export default useIsEachTodoCompletedSelector;
