import FilterTodos from "../types/enum/FilterTodos";
import { FilterTodosAction } from "./store-types/FilterTodosAction";
import {
  ActivateAllTodosActionError,
  ActivateAllTodosActionRequest,
  ActivateAllTodosActionSuccess,
  AddTodoActionError,
  AddTodoActionRequest,
  AddTodoActionSuccess,
  ClearCompletedTodosError,
  ClearCompletedTodosRequest,
  ClearCompletedTodosSuccess,
  CompleteAllTodosActionError,
  CompleteAllTodosActionRequest,
  CompleteAllTodosActionSuccess,
  FetchTodosActionRequest,
  FetchTodosActionSuccess,
  RemoveErrorAction as RemoveTodosErrorAction,
  RemoveTodoActionError,
  RemoveTodoActionRequest,
  RemoveTodoActionSuccess,
  ToggleTodoActivityActionError,
  ToggleTodoActivityActionRequest,
  ToggleTodoActivityActionSuccess,
  UpdateTodoValueActionError,
  UpdateTodoValueActionRequest,
  UpdateTodoValueActionSuccess,
} from "./store-types/TodosActions";
import ActionTypes from "./store-types/ActionTypes";
import ITodo from "../types/interfaces/ITodo";

// fetch todos
export const fetchTodos = (): FetchTodosActionRequest => ({
  type: ActionTypes.FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos: ITodo[]): FetchTodosActionSuccess => ({
  type: ActionTypes.FETCH_TODOS_SUCCESS,
  payload: { todos },
});

export const fetchTodosError = (error: any) => ({
  type: ActionTypes.FETCH_TODOS_ERROR,
  payload: { error },
});

// add todo
export const addTodo = (value: string): AddTodoActionRequest => ({
  type: ActionTypes.ADD_TODO_REQUEST,
  payload: { value },
});

export const addTodoSuccess = (todo: ITodo): AddTodoActionSuccess => ({
  type: ActionTypes.ADD_TODO_SUCCESS,
  payload: { todo },
});

export const addTodoError = (error: any): AddTodoActionError => ({
  type: ActionTypes.ADD_TODO_ERROR,
  payload: { error },
});

// remove todo
export const removeTodoById = (id: string): RemoveTodoActionRequest => ({
  type: ActionTypes.REMOVE_TODO_REQUEST,
  payload: { id },
});

export const removeTodoByIdSuccess = (id: string): RemoveTodoActionSuccess => ({
  type: ActionTypes.REMOVE_TODO_SUCCESS,
  payload: { id },
});

export const removeTodoByIdError = (error: any): RemoveTodoActionError => ({
  type: ActionTypes.REMOVE_TODO_ERROR,
  payload: { error },
});

// toggle todo
export const toggleTodoActivityById = (
  todo: ITodo
): ToggleTodoActivityActionRequest => ({
  type: ActionTypes.TOGGLE_TODO_ACTIVITY_REQUEST,
  payload: { todo },
});

export const toggleTodoActivityByIdSuccess = (
  id: string
): ToggleTodoActivityActionSuccess => ({
  type: ActionTypes.TOGGLE_TODO_ACTIVITY_SUCCESS,
  payload: { id },
});

export const toggleTodoActivityByIdError = (
  error: any
): ToggleTodoActivityActionError => ({
  type: ActionTypes.TOGGLE_TODO_ACTIVITY_ERROR,
  payload: { error },
});

// update todo
export const updateTodoValueById = (
  value: string,
  id: string
): UpdateTodoValueActionRequest => ({
  type: ActionTypes.UPDATE_TODO_VALUE_REQUEST,
  payload: { value, id },
});

export const updateTodoValueByIdSuccess = (
  value: string,
  id: string
): UpdateTodoValueActionSuccess => ({
  type: ActionTypes.UPDATE_TODO_VALUE_SUCCESS,
  payload: { id, value },
});

export const updateTodoValueByIdError = (
  error: any
): UpdateTodoValueActionError => ({
  type: ActionTypes.UPDATE_TODO_VALUE_ERROR,
  payload: { error },
});

// activate
export const activateAllTodos = (): ActivateAllTodosActionRequest => ({
  type: ActionTypes.ACTIVATE_ALL_TODOS_REQUEST,
});

export const activateAllTodosSuccess = (
  todos: ITodo[]
): ActivateAllTodosActionSuccess => ({
  type: ActionTypes.ACTIVATE_ALL_TODOS_SUCCESS,
  payload: { todos },
});

export const activateAllTodosError = (
  error: any
): ActivateAllTodosActionError => ({
  type: ActionTypes.ACTIVATE_ALL_TODOS_ERROR,
  payload: { error },
});

// complete todo
export const completeAllTodos = (): CompleteAllTodosActionRequest => ({
  type: ActionTypes.COMPLETE_ALL_TODOS_REQUEST,
});

export const completeAllTodosSuccess = (
  todos: ITodo[]
): CompleteAllTodosActionSuccess => ({
  type: ActionTypes.COMPLETE_ALL_TODOS_SUCCESS,
  payload: {
    todos,
  },
});

export const completeAllTodosError = (
  error: any
): CompleteAllTodosActionError => ({
  type: ActionTypes.COMPLETE_ALL_TODOS_ERROR,
  payload: { error },
});

// clear completed todo
export const clearCompletedTodos = (): // todos: ITodo[]
ClearCompletedTodosRequest => ({
  type: ActionTypes.CLEAR_COMPLETED_TODOS_REQUEST,
});

export const clearCompletedTodosSuccess = (
  todos: ITodo[]
): ClearCompletedTodosSuccess => ({
  type: ActionTypes.CLEAR_COMPLETED_TODOS_SUCCESS,
  payload: {
    todos,
  },
});

export const clearCompletedTodosError = (
  error: any
): ClearCompletedTodosError => ({
  type: ActionTypes.CLEAR_COMPLETED_TODOS_ERROR,
  payload: { error },
});

// remove todo
export const removeTodosError = (): RemoveTodosErrorAction => ({
  type: ActionTypes.REMOVE_TODOS_ERROR,
});

// update filter
export const updateFilterActivityStatus = (
  filterTodosActivityStatus: FilterTodos
): FilterTodosAction => ({
  type: ActionTypes.UPDATE_FILTER_ACTIVITY_STATUS_SUCCESS,
  payload: { filterTodosActivityStatus },
});
