import FilterTodos from "../../types/enum/FilterTodos";
import IAction from "./IAction";
import ActionTypes from "./ActionTypes";

export type FilterTodosAction = IAction<
  ActionTypes.UPDATE_FILTER_ACTIVITY_STATUS_SUCCESS,
  { filterTodosActivityStatus: FilterTodos }
>;
