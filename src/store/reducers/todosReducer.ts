import ITodo from "../../types/interfaces/ITodo";
import TodoActionTypes from "../store-types/enum/TodoActionTypes";
import { TodoAction } from "../store-types/actions/TodoActions";

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

const setRequestState = (state: TodosReducerState): TodosReducerState => ({
  ...state,
  request: true,
  error: null,
});

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
  action: TodoAction
): TodosReducerState => {
  const { todos } = state;

  switch (action.type) {
    case TodoActionTypes.GET_TODOS_SUCCESS: {
      return setSuccessState(state, action.payload?.todos);
    }

    case TodoActionTypes.GET_TODOS_REQUEST: {
      return setRequestState(state);
    }

    case TodoActionTypes.GET_TODOS_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case TodoActionTypes.ADD_TODO_SUCCESS: {
      if (!action.payload) return state;

      const newTodos = [action.payload.todo, ...todos];

      return setSuccessState(state, newTodos);
    }

    case TodoActionTypes.ADD_TODO_REQUEST: {
      return setRequestState(state);
    }

    case TodoActionTypes.ADD_TODO_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case TodoActionTypes.REMOVE_TODO_SUCCESS: {
      const newTodos = todos.filter(todo => todo?.id !== action?.payload?.id);

      return setSuccessState(state, newTodos);
    }

    case TodoActionTypes.REMOVE_TODO_REQUEST: {
      return setRequestState(state);
    }

    case TodoActionTypes.REMOVE_TODO_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case TodoActionTypes.TOGGLE_TODO_ACTIVITY_SUCCESS: {
      const newTodos = todos.map(
        (todo): ITodo =>
          todo.id === action.payload?.id
            ? { ...todo, isActive: !todo.isActive }
            : todo
      );

      return setSuccessState(state, newTodos);
    }

    case TodoActionTypes.TOGGLE_TODO_ACTIVITY_REQUEST: {
      return setRequestState(state);
    }

    case TodoActionTypes.TOGGLE_TODO_ACTIVITY_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case TodoActionTypes.UPDATE_TODO_VALUE_SUCCESS: {
      if (!action.payload) return state;

      const { value, id } = action.payload;

      const newTodos = todos.map(
        (todo): ITodo => {
          return todo.id === id ? { ...todo, value } : todo;
        }
      );

      return setSuccessState(state, newTodos);
    }

    case TodoActionTypes.UPDATE_TODO_VALUE_REQUEST: {
      return setRequestState(state);
    }

    case TodoActionTypes.UPDATE_TODO_VALUE_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case TodoActionTypes.ACTIVATE_ALL_TODOS_SUCCESS: {
      return setSuccessState(state, action.payload?.todos);
    }

    case TodoActionTypes.ACTIVATE_ALL_TODOS_REQUEST: {
      return setRequestState(state);
    }

    case TodoActionTypes.ACTIVATE_ALL_TODOS_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case TodoActionTypes.COMPLETE_ALL_TODOS_SUCCESS: {
      return setSuccessState(state, action.payload?.todos);
    }

    case TodoActionTypes.COMPLETE_ALL_TODOS_REQUEST: {
      return setRequestState(state);
    }

    case TodoActionTypes.COMPLETE_ALL_TODOS_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case TodoActionTypes.CLEAR_COMPLETED_TODOS_SUCCESS: {
      return setSuccessState(state, action.payload?.todos);
    }

    case TodoActionTypes.CLEAR_COMPLETED_TODOS_REQUEST: {
      return setRequestState(state);
    }

    case TodoActionTypes.CLEAR_COMPLETED_TODOS_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case TodoActionTypes.REMOVE_TODOS_ERROR: {
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
