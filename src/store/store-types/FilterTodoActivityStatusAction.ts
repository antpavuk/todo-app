import FilterActivityStatus from "../../types/enum/FilterActivityStatus";
import IAction from "./IAction";

export type FilterTodosActivityStatusAction = IAction<
  "UPDATE_FILTER_ACTIVITY_STATUS",
  { filterTodosActivityStatus: FilterActivityStatus }
>;
