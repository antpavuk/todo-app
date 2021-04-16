import { createSelector } from "reselect";
import FilterTodos from "../../../types/enum/FilterTodos";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

const useFilterTodosActivityStatusSelector = () => {
  const todosSelector = createSelector<RootState, FilterTodos, FilterTodos>(
    state => state.filterStatus.filterTodosActivityStatus,
    filterStatus => filterStatus
  );

  return useTypedSelector(todosSelector);
};

export default useFilterTodosActivityStatusSelector;
