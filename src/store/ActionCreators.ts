import FilterTodos from "../types/enum/FilterTodos";
import { FilterTodosAction } from "./store-types/FilterTodosAction";
import {
  ActivateAllTodosAction,
  AddTodoAction,
  ClearCompletedTodos,
  CompleteAllTodosAction,
  FetchTodosAction,
  RemoveTodoAction,
  SetErrorAction,
  ToggleTodoActivityAction,
  UpdateTodoValueAction,
} from "./store-types/TodosActions";
import ActionTypes from "./store-types/ActionTypes";
import { Dispatch } from "react";
import MainRouter from "../MainRouter";
import ITodo from "../types/interfaces/ITodo";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction | SetErrorAction>) => {
    try {
      const res = await MainRouter.get("api/todos");

      dispatch({
        type: ActionTypes.FETCH_TODOS,
        payload: { todos: res.data.todos },
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        payload: { err },
      });
    }
  };
};

export const addTodo = (value: string) => {
  return async (dispatch: Dispatch<AddTodoAction | SetErrorAction>) => {
    try {
      const res = await MainRouter.post("api/todos", {
        value,
      });

      dispatch({
        type: ActionTypes.ADD_TODO,
        payload: { todo: res.data.todo },
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.SET_ERROR,
        payload: { err },
      });
    }
  };
};

export const removeTodoById = (id: string) => async (
  dispatch: Dispatch<RemoveTodoAction | SetErrorAction>
) => {
  try {
    const res = await MainRouter.delete(`api/todos/${id}`);

    dispatch({
      type: ActionTypes.REMOVE_TODO,
      payload: { id: res.data.todo.id },
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: { err },
    });
  }
};

export const toggleTodoActivityById = (todo: ITodo) => async (
  dispatch: Dispatch<ToggleTodoActivityAction | SetErrorAction>
) => {
  try {
    const { id, isActive } = todo;

    const res = await MainRouter.put(`api/todos/${id}`, {
      isActive: !isActive,
    });

    dispatch({
      type: ActionTypes.TOGGLE_TODO_ACTIVITY,
      payload: { id: res.data.todo.id },
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: { err },
    });
  }
};

export const updateTodoValueById = (value: string, id: string) => async (
  dispatch: Dispatch<UpdateTodoValueAction | SetErrorAction>
) => {
  try {
    const res = await MainRouter.put(`api/todos/${id}`, {
      value,
    });

    dispatch({
      type: ActionTypes.UPDATE_TODO_VALUE,
      payload: { id: res.data.todo.id, value: res.data.todo.value },
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: { err },
    });
  }
};

export const activateAllTodos = () => async (
  dispatch: Dispatch<ActivateAllTodosAction | SetErrorAction>
) => {
  try {
    const res = await MainRouter.put(`api/todos`, null, {
      params: {
        action: "activate",
      },
    });

    dispatch({
      type: ActionTypes.ACTIVATE_ALL_TODOS,
      payload: { todos: res.data.todos },
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: { err },
    });
  }
};

export const completeAllTodos = () => async (
  dispatch: Dispatch<CompleteAllTodosAction | SetErrorAction>
) => {
  try {
    const res = await MainRouter.put(`api/todos`, null, {
      params: {
        action: "complete",
      },
    });

    dispatch({
      type: ActionTypes.COMPLETE_ALL_TODOS,
      payload: {
        todos: res.data.todos,
      },
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: { err },
    });
  }
};

export const clearCompletedTodos = () => async (
  dispatch: Dispatch<ClearCompletedTodos | SetErrorAction>
) => {
  try {
    const res = await MainRouter.delete(`api/todos`, {
      params: {
        isActive: false,
      },
    });

    dispatch({
      type: ActionTypes.CLEAR_COMPLETED_TODOS,
      payload: {
        todos: res.data.todos,
      },
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: { err },
    });
  }
};

export const updateFilterActivityStatus = (
  filterTodosActivityStatus: FilterTodos
): FilterTodosAction => ({
  type: ActionTypes.UPDATE_FILTER_ACTIVITY_STATUS,
  payload: { filterTodosActivityStatus },
});

export const removeError = () => {
  return {
    type: ActionTypes.REMOVE_ERROR,
  };
};
