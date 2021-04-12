import { createSelector } from "reselect";
import ITodo from "../../../types/interfaces/ITodo";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

const useIsAnyTodoExistedSelector = () => {
  const isAnyTodoExistedSelector = createSelector<RootState, ITodo[], boolean>(
    state => state.todo.todos,
    todos => todos.length !== 0
  );

  return useTypedSelector(isAnyTodoExistedSelector);
};

export default useIsAnyTodoExistedSelector;
