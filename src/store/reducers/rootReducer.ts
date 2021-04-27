import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { filterTodosReducer } from "./filterTodosActivityReducer";
import todosReducer from "./todosReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  todo: todosReducer,
  filterStatus: filterTodosReducer,
});

export default rootReducer;
