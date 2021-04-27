import FilterTodos from "../../types/enum/FilterTodos";
import { FilterTodosAction } from "../store-types/actions/FilterTodosAction";
import FilterActionTypes from "../store-types/enum/FilterActionTypes";

// update filter
export const updateFilterActivityStatus = (
  filterTodosActivityStatus: FilterTodos
): FilterTodosAction => ({
  type: FilterActionTypes.UPDATE_FILTER_ACTIVITY_STATUS,
  payload: { filterTodosActivityStatus },
});
