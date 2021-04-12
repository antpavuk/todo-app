import { createSelector } from "reselect";
import FilterActivityStatus from "../../../types/enum/FilterActivityStatus";
import RootState from "../../store-types/RootState";
import useTypedSelector from "./useTypedSelector";

const useFilterTodosActivityStatusSelector = () => {
  const todosSelector = createSelector<
    RootState,
    FilterActivityStatus,
    FilterActivityStatus
  >(
    state => state.filterStatus.filterTodosActivityStatus,
    filterStatus => filterStatus
  );

  return useTypedSelector(todosSelector);
};

export default useFilterTodosActivityStatusSelector;
