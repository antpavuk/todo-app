import FilterTodos from "../../types/enum/FilterTodos";
import ActionTypes from "../store-types/ActionTypes";
import { FilterTodosAction } from "../store-types/FilterTodosAction";

type FilterTodosActivityStatusTodosReducerState = {
  filterTodosActivityStatus: FilterTodos;
};

const initialState: FilterTodosActivityStatusTodosReducerState = {
  filterTodosActivityStatus: FilterTodos.ALL,
};

export const filterTodosReducer = (
  state: FilterTodosActivityStatusTodosReducerState = initialState,
  action: FilterTodosAction
): FilterTodosActivityStatusTodosReducerState => {
  switch (action.type) {
    case ActionTypes.UPDATE_FILTER_ACTIVITY_STATUS_SUCCESS: {
      if (!action.payload) return state;
      const { filterTodosActivityStatus } = action.payload;
      return action.payload ? { ...state, filterTodosActivityStatus } : state;
    }
    default: {
      return state;
    }
  }
};
