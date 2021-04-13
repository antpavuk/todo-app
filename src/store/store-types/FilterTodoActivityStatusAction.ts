import FilterActivityStatus from "../../types/enum/FilterActivityStatus";
import IAction from "./IAction";
import ActionTypes from "./ActionTypes";

export type FilterTodosActivityStatusAction = IAction<
  ActionTypes.UPDATE_FILTER_ACTIVITY_STATUS,
  { filterTodosActivityStatus: FilterActivityStatus }
>;
