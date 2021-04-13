import IAction from "./IAction";
import ActionTypes from "./ActionTypes";

export type AddTodoAction = IAction<ActionTypes.ADD_TODO, { value: string }>;
export type RemoveTodoAction = IAction<ActionTypes.REMOVE_TODO, { id: string }>;
export type ToggleTodoActtivityAction = IAction<
  ActionTypes.TOGGLE_TODO_ACTIVITY,
  { id: string }
>;
export type UpdateTodoValueAction = IAction<
  ActionTypes.UPDATE_TODO_VALUE,
  { value: string; id: string }
>;
export type ActivateAllTodosAction = IAction<ActionTypes.ACTIVATE_ALL_TODOS>;
export type CompleteAllTodosAction = IAction<ActionTypes.COMPLETE_ALL_TODOS>;
export type ClearCompletedTodos = IAction<ActionTypes.CLEAR_COMPLETED_TODOS>;

export type TodosAction =
  | AddTodoAction
  | RemoveTodoAction
  | ToggleTodoActtivityAction
  | UpdateTodoValueAction
  | ActivateAllTodosAction
  | CompleteAllTodosAction
  | ClearCompletedTodos;
