import FilterTodos from "../../../types/enum/FilterTodos";
import FilterActionTypes from "../enum/FilterActionTypes";
import IAction from "./IAction";

export type FilterTodosAction = IAction<
  FilterActionTypes.UPDATE_FILTER_ACTIVITY_STATUS,
  { filterTodosActivityStatus: FilterTodos }
>;
