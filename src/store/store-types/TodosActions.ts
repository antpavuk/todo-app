import IAction from "./IAction";
import ActionTypes from "./ActionTypes";
import ITodo from "../../types/interfaces/ITodo";

// fetch todos
export type FetchTodosActionSuccess = IAction<
  ActionTypes.FETCH_TODOS_SUCCESS,
  { todos: ITodo[] }
>;
export type FetchTodosActionRequest = IAction<ActionTypes.FETCH_TODOS_REQUEST>;
export type FetchTodosActionError = IAction<
  ActionTypes.FETCH_TODOS_ERROR,
  { error: Error }
>;

// add todo
export type AddTodoActionSuccess = IAction<
  ActionTypes.ADD_TODO_SUCCESS,
  { todo: ITodo }
>;
export type AddTodoActionRequest = IAction<
  ActionTypes.ADD_TODO_REQUEST,
  { value: string }
>;
export type AddTodoActionError = IAction<
  ActionTypes.ADD_TODO_ERROR,
  { error: Error }
>;

// toggle todo activity
export type ToggleTodoActivityActionSuccess = IAction<
  ActionTypes.TOGGLE_TODO_ACTIVITY_SUCCESS,
  { id: string }
>;
export type ToggleTodoActivityActionRequest = IAction<
  ActionTypes.TOGGLE_TODO_ACTIVITY_REQUEST,
  { todo: ITodo }
>;
export type ToggleTodoActivityActionError = IAction<
  ActionTypes.TOGGLE_TODO_ACTIVITY_ERROR,
  { error: Error }
>;

// update todo value
export type UpdateTodoValueActionSuccess = IAction<
  ActionTypes.UPDATE_TODO_VALUE_SUCCESS,
  { value: string; id: string }
>;
export type UpdateTodoValueActionRequest = IAction<
  ActionTypes.UPDATE_TODO_VALUE_REQUEST,
  { value: string; id: string }
>;
export type UpdateTodoValueActionError = IAction<
  ActionTypes.UPDATE_TODO_VALUE_ERROR,
  { error: Error }
>;

// activate all todos
export type ActivateAllTodosActionSuccess = IAction<
  ActionTypes.ACTIVATE_ALL_TODOS_SUCCESS,
  { todos: ITodo[] }
>;
export type ActivateAllTodosActionRequest = IAction<ActionTypes.ACTIVATE_ALL_TODOS_REQUEST>;
export type ActivateAllTodosActionError = IAction<
  ActionTypes.ACTIVATE_ALL_TODOS_ERROR,
  { error: Error }
>;

// complete all todos
export type CompleteAllTodosActionSuccess = IAction<
  ActionTypes.COMPLETE_ALL_TODOS_SUCCESS,
  { todos: ITodo[] }
>;
export type CompleteAllTodosActionRequest = IAction<ActionTypes.COMPLETE_ALL_TODOS_REQUEST>;
export type CompleteAllTodosActionError = IAction<
  ActionTypes.COMPLETE_ALL_TODOS_ERROR,
  { error: Error }
>;

// remove todo
export type RemoveTodoActionSuccess = IAction<
  ActionTypes.REMOVE_TODO_SUCCESS,
  { id: string }
>;
export type RemoveTodoActionRequest = IAction<
  ActionTypes.REMOVE_TODO_REQUEST,
  { id: string }
>;
export type RemoveTodoActionError = IAction<
  ActionTypes.REMOVE_TODO_ERROR,
  { error: Error }
>;

// clear completed
export type ClearCompletedTodosSuccess = IAction<
  ActionTypes.CLEAR_COMPLETED_TODOS_SUCCESS,
  { todos: ITodo[] }
>;
export type ClearCompletedTodosRequest = IAction<ActionTypes.CLEAR_COMPLETED_TODOS_REQUEST>;
export type ClearCompletedTodosError = IAction<
  ActionTypes.CLEAR_COMPLETED_TODOS_ERROR,
  { error: Error }
>;

export type RemoveErrorAction = IAction<ActionTypes.REMOVE_TODOS_ERROR>;

export type TodosAction =
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
  | RemoveErrorAction;
