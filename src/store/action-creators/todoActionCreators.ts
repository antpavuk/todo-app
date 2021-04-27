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
  RemoveTodoErrorAction as RemoveTodosErrorAction,
  RemoveTodoActionError,
  RemoveTodoActionRequest,
  RemoveTodoActionSuccess,
  ToggleTodoActivityActionError,
  ToggleTodoActivityActionRequest,
  ToggleTodoActivityActionSuccess,
  UpdateTodoValueActionError,
  UpdateTodoValueActionRequest,
  UpdateTodoValueActionSuccess,
} from "../store-types/actions/TodoActions";
import TodoActionTypes from "../store-types/enum/TodoActionTypes";
import ITodo from "../../types/interfaces/ITodo";

// fetch todos
export const fetchTodos = (): FetchTodosActionRequest => ({
  type: TodoActionTypes.GET_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos: ITodo[]): FetchTodosActionSuccess => ({
  type: TodoActionTypes.GET_TODOS_SUCCESS,
  payload: { todos },
});

export const fetchTodosError = (error: any) => ({
  type: TodoActionTypes.GET_TODOS_ERROR,
  payload: { error },
});

// add todo
export const addTodo = (value: string): AddTodoActionRequest => ({
  type: TodoActionTypes.ADD_TODO_REQUEST,
  payload: { value },
});

export const addTodoSuccess = (todo: ITodo): AddTodoActionSuccess => ({
  type: TodoActionTypes.ADD_TODO_SUCCESS,
  payload: { todo },
});

export const addTodoError = (error: any): AddTodoActionError => ({
  type: TodoActionTypes.ADD_TODO_ERROR,
  payload: { error },
});

// remove todo
export const removeTodoById = (id: string): RemoveTodoActionRequest => ({
  type: TodoActionTypes.REMOVE_TODO_REQUEST,
  payload: { id },
});

export const removeTodoByIdSuccess = (id: string): RemoveTodoActionSuccess => ({
  type: TodoActionTypes.REMOVE_TODO_SUCCESS,
  payload: { id },
});

export const removeTodoByIdError = (error: any): RemoveTodoActionError => ({
  type: TodoActionTypes.REMOVE_TODO_ERROR,
  payload: { error },
});

// toggle todo
export const toggleTodoActivityById = (
  todo: ITodo
): ToggleTodoActivityActionRequest => ({
  type: TodoActionTypes.TOGGLE_TODO_ACTIVITY_REQUEST,
  payload: { todo },
});

export const toggleTodoActivityByIdSuccess = (
  id: string
): ToggleTodoActivityActionSuccess => ({
  type: TodoActionTypes.TOGGLE_TODO_ACTIVITY_SUCCESS,
  payload: { id },
});

export const toggleTodoActivityByIdError = (
  error: any
): ToggleTodoActivityActionError => ({
  type: TodoActionTypes.TOGGLE_TODO_ACTIVITY_ERROR,
  payload: { error },
});

// update todo
export const updateTodoValueById = (
  value: string,
  id: string
): UpdateTodoValueActionRequest => ({
  type: TodoActionTypes.UPDATE_TODO_VALUE_REQUEST,
  payload: { value, id },
});

export const updateTodoValueByIdSuccess = (
  value: string,
  id: string
): UpdateTodoValueActionSuccess => ({
  type: TodoActionTypes.UPDATE_TODO_VALUE_SUCCESS,
  payload: { id, value },
});

export const updateTodoValueByIdError = (
  error: any
): UpdateTodoValueActionError => ({
  type: TodoActionTypes.UPDATE_TODO_VALUE_ERROR,
  payload: { error },
});

// activate
export const activateAllTodos = (): ActivateAllTodosActionRequest => ({
  type: TodoActionTypes.ACTIVATE_ALL_TODOS_REQUEST,
});

export const activateAllTodosSuccess = (
  todos: ITodo[]
): ActivateAllTodosActionSuccess => ({
  type: TodoActionTypes.ACTIVATE_ALL_TODOS_SUCCESS,
  payload: { todos },
});

export const activateAllTodosError = (
  error: any
): ActivateAllTodosActionError => ({
  type: TodoActionTypes.ACTIVATE_ALL_TODOS_ERROR,
  payload: { error },
});

// complete todo
export const completeAllTodos = (): CompleteAllTodosActionRequest => ({
  type: TodoActionTypes.COMPLETE_ALL_TODOS_REQUEST,
});

export const completeAllTodosSuccess = (
  todos: ITodo[]
): CompleteAllTodosActionSuccess => ({
  type: TodoActionTypes.COMPLETE_ALL_TODOS_SUCCESS,
  payload: {
    todos,
  },
});

export const completeAllTodosError = (
  error: any
): CompleteAllTodosActionError => ({
  type: TodoActionTypes.COMPLETE_ALL_TODOS_ERROR,
  payload: { error },
});

// clear completed todo
export const clearCompletedTodos = (): // todos: ITodo[]
ClearCompletedTodosRequest => ({
  type: TodoActionTypes.CLEAR_COMPLETED_TODOS_REQUEST,
});

export const clearCompletedTodosSuccess = (
  todos: ITodo[]
): ClearCompletedTodosSuccess => ({
  type: TodoActionTypes.CLEAR_COMPLETED_TODOS_SUCCESS,
  payload: {
    todos,
  },
});

export const clearCompletedTodosError = (
  error: any
): ClearCompletedTodosError => ({
  type: TodoActionTypes.CLEAR_COMPLETED_TODOS_ERROR,
  payload: { error },
});

// remove todo
export const removeTodosError = (): RemoveTodosErrorAction => ({
  type: TodoActionTypes.REMOVE_TODOS_ERROR,
});
