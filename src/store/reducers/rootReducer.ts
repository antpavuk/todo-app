import { combineReducers } from "@reduxjs/toolkit";
import { filterTodosReducer } from "./filterTodosActivityReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  todo: todosReducer,
  filterStatus: filterTodosReducer,
});

export default rootReducer;
