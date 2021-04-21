import ITodo from "../../types/interfaces/ITodo";
import ActionTypes from "../store-types/ActionTypes";
import { TodosAction } from "../store-types/TodosActions";

type TodosReducerState = {
  todos: ITodo[];
  request: boolean;
  error: Error | null;
};

const initialState: TodosReducerState = {
  todos: [],
  request: true,
  error: null,
};

const setSuccessState = (
  state: TodosReducerState,
  todos: ITodo[] = []
): TodosReducerState => ({
  ...state,
  todos,
  request: false,
  error: null,
});

// for all requests, set the pending flag and clear the error flag
const setRequestState = (state: TodosReducerState): TodosReducerState => ({
  ...state,
  request: true,
  error: null,
});

// for errors, clear pending flag and store the error
const setErrorState = (
  state: TodosReducerState,
  error: Error
): TodosReducerState => ({
  ...state,
  request: false,
  error,
});

const todosReducer = (
  state: TodosReducerState = initialState,
  action: TodosAction
): TodosReducerState => {
  const { todos } = state;

  switch (action.type) {
    case ActionTypes.FETCH_TODOS_SUCCESS: {
      return setSuccessState(state, action.payload?.todos);
    }

    case ActionTypes.FETCH_TODOS_REQUEST: {
      return setRequestState(state);
    }

    case ActionTypes.FETCH_TODOS_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case ActionTypes.ADD_TODO_SUCCESS: {
      if (!action.payload) return state;

      const newTodos = [action.payload.todo, ...todos];

      return setSuccessState(state, newTodos);
    }

    case ActionTypes.ADD_TODO_REQUEST: {
      return setRequestState(state);
    }

    case ActionTypes.ADD_TODO_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case ActionTypes.REMOVE_TODO_SUCCESS: {
      const newTodos = todos.filter(todo => todo?.id !== action?.payload?.id);

      return setSuccessState(state, newTodos);
    }

    case ActionTypes.REMOVE_TODO_REQUEST: {
      return setRequestState(state);
    }

    case ActionTypes.REMOVE_TODO_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case ActionTypes.TOGGLE_TODO_ACTIVITY_SUCCESS: {
      const newTodos = todos.map(
        (todo): ITodo =>
          todo.id === action.payload?.id
            ? { ...todo, isActive: !todo.isActive }
            : todo
      );

      return setSuccessState(state, newTodos);
    }

    case ActionTypes.TOGGLE_TODO_ACTIVITY_REQUEST: {
      return setRequestState(state);
    }

    case ActionTypes.TOGGLE_TODO_ACTIVITY_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case ActionTypes.UPDATE_TODO_VALUE_SUCCESS: {
      if (!action.payload) return state;

      const { value, id } = action.payload;

      const newTodos = todos.map(
        (todo): ITodo => {
          return todo.id === id ? { ...todo, value } : todo;
        }
      );

      return setSuccessState(state, newTodos);
    }

    case ActionTypes.UPDATE_TODO_VALUE_REQUEST: {
      return setRequestState(state);
    }

    case ActionTypes.UPDATE_TODO_VALUE_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case ActionTypes.ACTIVATE_ALL_TODOS_SUCCESS: {
      return setSuccessState(state, action.payload?.todos);
    }

    case ActionTypes.ACTIVATE_ALL_TODOS_REQUEST: {
      return setRequestState(state);
    }

    case ActionTypes.ACTIVATE_ALL_TODOS_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case ActionTypes.COMPLETE_ALL_TODOS_SUCCESS: {
      return setSuccessState(state, action.payload?.todos);
    }

    case ActionTypes.COMPLETE_ALL_TODOS_REQUEST: {
      return setRequestState(state);
    }

    case ActionTypes.COMPLETE_ALL_TODOS_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case ActionTypes.CLEAR_COMPLETED_TODOS_SUCCESS: {
      return setSuccessState(state, action.payload?.todos);
    }

    case ActionTypes.CLEAR_COMPLETED_TODOS_REQUEST: {
      return setRequestState(state);
    }

    case ActionTypes.CLEAR_COMPLETED_TODOS_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case ActionTypes.REMOVE_TODOS_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

export default todosReducer;
