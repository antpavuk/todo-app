import FilterTodosActivityStatus from "../../types/enum/FilterActivityStatus";
import { FilterTodosActivityStatusAction } from "../store-types/FilterTodoActivityStatusAction";

const initialState = FilterTodosActivityStatus.ALL;

export const filterTodosActivityStatusReducer = (
  state: FilterTodosActivityStatus = initialState,
  action: FilterTodosActivityStatusAction
): FilterTodosActivityStatus => {
  if (action.type === "UPDATE_FILTER_ACTIVITY_STATUS" && action.payload) {
    return action.payload.filterTodosActivityStatus;
  } else {
    return state;
  }
};
