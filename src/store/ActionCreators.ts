import FilterTodosActivityStatus from "../types/enum/FilterActivityStatus";
import { FilterTodosActivityStatusAction } from "./store-types/FilterTodoActivityStatusAction";
import {
  ActivateAllTodosAction,
  AddTodoAction,
  ClearCompletedTodos,
  CompleteAllTodosAction,
  RemoveTodoAction,
  ToggleTodoActtivityAction,
  UpdateTodoValueAction,
} from "./store-types/TodosActions";
import ActionTypes from "./store-types/ActionTypes";

export const addTodo = (value: string): AddTodoAction => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: { value },
  };
};

export const removeTodoById = (id: string): RemoveTodoAction => ({
  type: ActionTypes.REMOVE_TODO,
  payload: { id },
});

export const toggleTodoActivityById = (
  id: string
): ToggleTodoActtivityAction => ({
  type: ActionTypes.TOGGLE_TODO_ACTIVITY,
  payload: { id },
});

export const updateTodoValueById = (
  value: string,
  id: string
): UpdateTodoValueAction => ({
  type: ActionTypes.UPDATE_TODO_VALUE,
  payload: { value, id },
});

export const activateAllTodos = (): ActivateAllTodosAction => ({
  type: ActionTypes.ACTIVATE_ALL_TODOS,
});

export const completeAllTodos = (): CompleteAllTodosAction => ({
  type: ActionTypes.COMPLETE_ALL_TODOS,
});

export const clearCompletedTodos = (): ClearCompletedTodos => ({
  type: ActionTypes.CLEAR_COMPLETED_TODOS,
});

export const updateFilterActivityStatus = (
  filterTodosActivityStatus: FilterTodosActivityStatus
): FilterTodosActivityStatusAction => ({
  type: ActionTypes.UPDATE_FILTER_ACTIVITY_STATUS,
  payload: { filterTodosActivityStatus },
});
