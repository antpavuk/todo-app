import { combineReducers } from "redux";
import { filterTodosActivityStatusReducer } from "./filterTodosActivityReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  todo: todosReducer,
  filterStatus: filterTodosActivityStatusReducer,
});

export default rootReducer;
