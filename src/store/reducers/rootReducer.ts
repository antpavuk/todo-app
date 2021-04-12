import { combineReducers } from "redux";
import { filterTodosActivityStatusReducer } from "./filterTodosActivityReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filterTodosActivityStatus: filterTodosActivityStatusReducer,
});

export default rootReducer;
