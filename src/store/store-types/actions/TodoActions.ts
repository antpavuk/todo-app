import IAction from "./IAction";
import TodoActionTypes from "../enum/TodoActionTypes";
import ITodo from "../../../types/interfaces/ITodo";

// fetch todos
export type FetchTodosActionSuccess = IAction<
  TodoActionTypes.GET_TODOS_SUCCESS,
  { todos: ITodo[] }
>;
export type FetchTodosActionRequest = IAction<TodoActionTypes.GET_TODOS_REQUEST>;
export type FetchTodosActionError = IAction<
  TodoActionTypes.GET_TODOS_ERROR,
  { error: Error }
>;

// add todo
export type AddTodoActionSuccess = IAction<
  TodoActionTypes.ADD_TODO_SUCCESS,
  { todo: ITodo }
>;
export type AddTodoActionRequest = IAction<
  TodoActionTypes.ADD_TODO_REQUEST,
  { value: string }
>;
export type AddTodoActionError = IAction<
  TodoActionTypes.ADD_TODO_ERROR,
  { error: Error }
>;

// toggle todo activity
export type ToggleTodoActivityActionSuccess = IAction<
  TodoActionTypes.TOGGLE_TODO_ACTIVITY_SUCCESS,
  { id: string }
>;
export type ToggleTodoActivityActionRequest = IAction<
  TodoActionTypes.TOGGLE_TODO_ACTIVITY_REQUEST,
  { todo: ITodo }
>;
export type ToggleTodoActivityActionError = IAction<
  TodoActionTypes.TOGGLE_TODO_ACTIVITY_ERROR,
  { error: Error }
>;

// update todo value
export type UpdateTodoValueActionSuccess = IAction<
  TodoActionTypes.UPDATE_TODO_VALUE_SUCCESS,
  { value: string; id: string }
>;
export type UpdateTodoValueActionRequest = IAction<
  TodoActionTypes.UPDATE_TODO_VALUE_REQUEST,
  { value: string; id: string }
>;
export type UpdateTodoValueActionError = IAction<
  TodoActionTypes.UPDATE_TODO_VALUE_ERROR,
  { error: Error }
>;

// activate all todos
export type ActivateAllTodosActionSuccess = IAction<
  TodoActionTypes.ACTIVATE_ALL_TODOS_SUCCESS,
  { todos: ITodo[] }
>;
export type ActivateAllTodosActionRequest = IAction<TodoActionTypes.ACTIVATE_ALL_TODOS_REQUEST>;
export type ActivateAllTodosActionError = IAction<
  TodoActionTypes.ACTIVATE_ALL_TODOS_ERROR,
  { error: Error }
>;

// complete all todos
export type CompleteAllTodosActionSuccess = IAction<
  TodoActionTypes.COMPLETE_ALL_TODOS_SUCCESS,
  { todos: ITodo[] }
>;
export type CompleteAllTodosActionRequest = IAction<TodoActionTypes.COMPLETE_ALL_TODOS_REQUEST>;
export type CompleteAllTodosActionError = IAction<
  TodoActionTypes.COMPLETE_ALL_TODOS_ERROR,
  { error: Error }
>;

// remove todo
export type RemoveTodoActionSuccess = IAction<
  TodoActionTypes.REMOVE_TODO_SUCCESS,
  { id: string }
>;
export type RemoveTodoActionRequest = IAction<
  TodoActionTypes.REMOVE_TODO_REQUEST,
  { id: string }
>;
export type RemoveTodoActionError = IAction<
  TodoActionTypes.REMOVE_TODO_ERROR,
  { error: Error }
>;

// clear completed
export type ClearCompletedTodosSuccess = IAction<
  TodoActionTypes.CLEAR_COMPLETED_TODOS_SUCCESS,
  { todos: ITodo[] }
>;
export type ClearCompletedTodosRequest = IAction<TodoActionTypes.CLEAR_COMPLETED_TODOS_REQUEST>;
export type ClearCompletedTodosError = IAction<
  TodoActionTypes.CLEAR_COMPLETED_TODOS_ERROR,
  { error: Error }
>;

export type RemoveTodoErrorAction = IAction<TodoActionTypes.REMOVE_TODOS_ERROR>;

export type TodoAction =
  | FetchTodosActionSuccess
  | FetchTodosActionRequest
  | FetchTodosActionError
  | AddTodoActionSuccess
  | AddTodoActionRequest
  | AddTodoActionError
  | RemoveTodoActionSuccess
  | RemoveTodoActionRequest
  | RemoveTodoActionError
  | ToggleTodoActivityActionSuccess
  | ToggleTodoActivityActionRequest
  | ToggleTodoActivityActionError
  | UpdateTodoValueActionSuccess
  | UpdateTodoValueActionRequest
  | UpdateTodoValueActionError
  | ActivateAllTodosActionSuccess
  | ActivateAllTodosActionRequest
  | ActivateAllTodosActionError
  | CompleteAllTodosActionSuccess
  | CompleteAllTodosActionRequest
  | CompleteAllTodosActionError
  | ClearCompletedTodosSuccess
  | ClearCompletedTodosRequest
  | ClearCompletedTodosError
  | RemoveTodoErrorAction;
