import ITodo from "../../../types/interfaces/ITodo";
import RootState from "../../store-types/RootState";
import { createSelector } from "reselect";
import useTypedSelector from "./useTypedSelector";
import FilterTodos from "../../../types/enum/FilterTodos";

const useFilteredTodosSelector = () => {
  const filteredTodosSelector = createSelector<
    RootState,
    ITodo[],
    FilterTodos,
    ITodo[]
  >(
    state => state.todo.todos,
    state => state.filterStatus.filterTodosActivityStatus,
    (todos, filterTodosActivityStatus) =>
      todos.filter(
        todo =>
          filterTodosActivityStatus === FilterTodos.ALL ||
          (filterTodosActivityStatus === FilterTodos.ACTIVE && todo.isActive) ||
          (filterTodosActivityStatus === FilterTodos.COMPLETED &&
            !todo.isActive)
      )
  );

  return useTypedSelector(state => filteredTodosSelector(state));
};

export default useFilteredTodosSelector;
