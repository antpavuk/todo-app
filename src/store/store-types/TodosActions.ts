import IAction from "./IAction";
import { TodosActionTypes } from "./TodosActionTypes";

export type AddTodoAction = IAction<
  TodosActionTypes.ADD_TODO,
  { value: string }
>;
export type RemoveTodoAction = IAction<
  TodosActionTypes.REMOVE_TODO,
  { id: string }
>;
export type ToggleTodoActtivityAction = IAction<
  TodosActionTypes.TOGGLE_TODO_ACTIVITY,
  { id: string }
>;
export type UpdateTodoValueAction = IAction<
  TodosActionTypes.UPDATE_TODO_VALUE,
  { value: string; id: string }
>;
export type ActivateAllTodosAction = IAction<TodosActionTypes.ACTIVATE_ALL_TODOS>;
export type CompleteAllTodosAction = IAction<TodosActionTypes.COMPLETE_ALL_TODOS>;
export type ClearCompletedTodos = IAction<TodosActionTypes.CLEAR_COMPLETED_TODOS>;

export type TodosAction =
  | AddTodoAction
  | RemoveTodoAction
  | ToggleTodoActtivityAction
  | UpdateTodoValueAction
  | ActivateAllTodosAction
  | CompleteAllTodosAction
  | ClearCompletedTodos;
