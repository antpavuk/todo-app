import FilterTodos from "../../types/enum/FilterTodos";
import FilterActionTypes from "../store-types/enum/FilterActionTypes";
import { FilterTodosAction } from "../store-types/actions/FilterTodosAction";

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
    case FilterActionTypes.UPDATE_FILTER_ACTIVITY_STATUS: {
      if (!action.payload) return state;
      const { filterTodosActivityStatus } = action.payload;
      return action.payload ? { ...state, filterTodosActivityStatus } : state;
    }
    default: {
      return state;
    }
  }
};
