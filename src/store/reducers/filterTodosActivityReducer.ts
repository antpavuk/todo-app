import FilterTodosActivityStatus from "../../types/enum/FilterActivityStatus";
import { FilterTodosActivityStatusAction } from "../store-types/FilterTodoActivityStatusAction";

type FilterTodosActivityStatusTodosReducerState = {
  filterTodosActivityStatus: FilterTodosActivityStatus;
};
const initialState: FilterTodosActivityStatusTodosReducerState = {
  filterTodosActivityStatus: FilterTodosActivityStatus.ALL,
};

export const filterTodosActivityStatusReducer = (
  state: FilterTodosActivityStatusTodosReducerState = initialState,
  action: FilterTodosActivityStatusAction
): FilterTodosActivityStatusTodosReducerState => {
  switch (action.type) {
    case "UPDATE_FILTER_ACTIVITY_STATUS": {
      if (!action.payload) return state;
      const { filterTodosActivityStatus } = action.payload;
      return action.payload ? { ...state, filterTodosActivityStatus } : state;
    }
    default: {
      return state;
    }
  }
};
