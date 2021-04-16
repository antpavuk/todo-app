import ITodo from "../../types/interfaces/ITodo";
import ActionTypes from "../store-types/ActionTypes";
import { TodosAction } from "../store-types/TodosActions";

type TodosReducerState = { todos: ITodo[]; error: Error | null };
const initialState: TodosReducerState = { todos: [], error: null };

const todosReducer = (
  state: TodosReducerState = initialState,
  action: TodosAction
): TodosReducerState => {
  const { todos } = state;

  switch (action.type) {
    case ActionTypes.FETCH_TODOS: {
      return {
        ...state,
        error: null,
        todos: action.payload ? action.payload.todos : [],
      };
    }

    case ActionTypes.ADD_TODO: {
      if (!action.payload) return state;

      const newTodos = [action.payload.todo, ...todos];

      return { ...state, error: null, todos: newTodos };
    }

    case ActionTypes.REMOVE_TODO: {
      const newTodos = todos.filter(todo => todo?.id !== action?.payload?.id);

      return {
        ...state,
        error: null,
        todos: newTodos,
      };
    }

    case ActionTypes.TOGGLE_TODO_ACTIVITY: {
      const newTodos = todos.map(
        (todo): ITodo =>
          todo.id === action.payload?.id
            ? { ...todo, isActive: !todo.isActive }
            : todo
      );

      return {
        ...state,
        error: null,
        todos: newTodos,
      };
    }

    case ActionTypes.UPDATE_TODO_VALUE: {
      if (!action.payload) return state;

      const { value, id } = action.payload;

      const newTodos = todos.map(
        (todo): ITodo => {
          return todo.id === id ? { ...todo, value } : todo;
        }
      );

      return {
        ...state,
        error: null,
        todos: newTodos,
      };
    }

    case ActionTypes.ACTIVATE_ALL_TODOS: {
      return {
        ...state,
        error: null,
        todos: action.payload!.todos,
      };
    }

    case ActionTypes.COMPLETE_ALL_TODOS: {
      return {
        ...state,
        error: null,
        todos: action.payload!.todos,
      };
    }

    case ActionTypes.CLEAR_COMPLETED_TODOS: {
      return {
        ...state,
        error: null,
        todos: action.payload!.todos,
      };
    }

    case ActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload?.err,
      };
    }

    case ActionTypes.REMOVE_ERROR: {
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
