import IAction from "./IAction";
import ActionTypes from "./ActionTypes";
import ITodo from "../../types/interfaces/ITodo";

export type FetchTodosAction = IAction<
  ActionTypes.FETCH_TODOS,
  { todos: ITodo[] }
>;
export type AddTodoAction = IAction<ActionTypes.ADD_TODO, { todo: ITodo }>;
export type RemoveTodoAction = IAction<ActionTypes.REMOVE_TODO, { id: string }>;
export type ToggleTodoActivityAction = IAction<
  ActionTypes.TOGGLE_TODO_ACTIVITY,
  { id: string }
>;
export type UpdateTodoValueAction = IAction<
  ActionTypes.UPDATE_TODO_VALUE,
  { value: string; id: string }
>;
export type ActivateAllTodosAction = IAction<
  ActionTypes.ACTIVATE_ALL_TODOS,
  { todos: ITodo[] }
>;
export type CompleteAllTodosAction = IAction<
  ActionTypes.COMPLETE_ALL_TODOS,
  { todos: ITodo[] }
>;
export type ClearCompletedTodos = IAction<
  ActionTypes.CLEAR_COMPLETED_TODOS,
  { todos: ITodo[] }
>;

export type SetErrorAction = IAction<
  ActionTypes.SET_ERROR,
  { err: Error | any }
>;
export type RemoveErrorAction = IAction<ActionTypes.REMOVE_ERROR>;

export type TodosAction =
  | FetchTodosAction
  | AddTodoAction
  | RemoveTodoAction
  | ToggleTodoActivityAction
  | UpdateTodoValueAction
  | ActivateAllTodosAction
  | CompleteAllTodosAction
  | ClearCompletedTodos
  | SetErrorAction
  | RemoveErrorAction;
