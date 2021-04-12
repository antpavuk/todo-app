import ITodo from "../../../types/interfaces/ITodo";
import RootState from "../../store-types/RootState";
import { createSelector } from "reselect";
import useTypedSelector from "./useTypedSelector";
import FilterActivityStatus from "../../../types/enum/FilterActivityStatus";

const useFilteredTodosSelector = () => {
  const filteredTodosSelector = createSelector<
    RootState,
    ITodo[],
    FilterActivityStatus,
    ITodo[]
  >(
    state => state.todo.todos,
    state => state.filterStatus.filterTodosActivityStatus,
    (todos, filterTodosActivityStatus) =>
      todos.filter(
        todo =>
          filterTodosActivityStatus === FilterActivityStatus.ALL ||
          (filterTodosActivityStatus === FilterActivityStatus.ACTIVE &&
            todo.isActive) ||
          (filterTodosActivityStatus === FilterActivityStatus.COMPLETED &&
            !todo.isActive)
      )
  );

  return useTypedSelector(state => filteredTodosSelector(state));
};

export default useFilteredTodosSelector;
