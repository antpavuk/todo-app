// const addTodo = (todo: ITodo): void => setTodos([todo, ...todos]);
import FilterTodosActivityStatus from "../types/enum/FilterActivityStatus";
import ITodo from "../types/interfaces/ITodo";
import { FilterTodosActivityStatusAction } from "./store-types/FilterTodoActivityStatusAction";
// import { FilterTodosActivityStatusAction } from "./reducers/filterTodosActivityReducer";
import {
  ActivateAllTodosAction,
  AddTodoAction,
  ClearCompletedTodos,
  CompleteAllTodosAction,
  RemoveTodoAction,
  ToggleTodoActtivityAction,
  UpdateTodoValueAction,
} from "./store-types/TodosActions";
import { TodosActionTypes } from "./store-types/TodosActionTypes";

export const addTodo = (value: string): AddTodoAction => {
  const todo: ITodo = {
    id: new Date().toISOString(),
    value,
    isActive: true,
  };

  return {
    type: TodosActionTypes.ADD_TODO,
    payload: { todo },
  };
};

export const removeTodoById = (id: string): RemoveTodoAction => ({
  type: TodosActionTypes.REMOVE_TODO,
  payload: { id },
});

export const toggleTodoActivityById = (
  id: string
): ToggleTodoActtivityAction => ({
  type: TodosActionTypes.TOGGLE_TODO_ACTIVITY,
  payload: { id },
});

export const updateTodoValueById = (
  value: string,
  id: string
): UpdateTodoValueAction => ({
  type: TodosActionTypes.UPDATE_TODO_VALUE,
  payload: { value, id },
});

export const activateAllTodos = (): ActivateAllTodosAction => ({
  type: TodosActionTypes.ACTIVATE_ALL_TODOS,
});

export const completeAllTodos = (): CompleteAllTodosAction => ({
  type: TodosActionTypes.COMPLETE_ALL_TODOS,
});

export const clearCompletedTodos = (): ClearCompletedTodos => ({
  type: TodosActionTypes.CLEAR_COMPLETED_TODOS,
});

export const updateFilterActivityStatus = (
  filterTodosActivityStatus: FilterTodosActivityStatus
): FilterTodosActivityStatusAction => ({
  type: "UPDATE_FILTER_ACTIVITY_STATUS",
  payload: { filterTodosActivityStatus },
});
