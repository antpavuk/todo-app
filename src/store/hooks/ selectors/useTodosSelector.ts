import { createSelector } from "reselect";
import ITodo from "../../../types/interfaces/ITodo";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

const useTodosSelector = () => {
  const todosSelector = createSelector<RootState, ITodo[], ITodo[]>(
    state => state.todo.todos,
    todos => todos
  );

  return useTypedSelector(todosSelector);
};

export default useTodosSelector;
