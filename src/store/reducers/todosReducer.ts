import ITodo from "../../types/interfaces/ITodo";
import ActionTypes from "../store-types/ActionTypes";
import { TodosAction } from "../store-types/TodosActions";

type TodosReducerState = { todos: ITodo[] };
const initialState: TodosReducerState = { todos: [] };

const todosReducer = (
  state: TodosReducerState = initialState,
  action: TodosAction
): TodosReducerState => {
  const { todos } = state;

  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      if (!action.payload) return state;

      const todo: ITodo = {
        id: new Date().toISOString(),
        value: action.payload.value,
        isActive: true,
      };

      const newTodos = [todo, ...todos];

      return { ...state, todos: newTodos };
    }

    case ActionTypes.REMOVE_TODO: {
      const newTodos = todos.filter(todo => todo?.id !== action?.payload?.id);

      return {
        ...state,
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
        todos: newTodos,
      };
    }
    case ActionTypes.ACTIVATE_ALL_TODOS: {
      const newTodos = todos.map(
        (todo): ITodo =>
          todo.isActive
            ? todo
            : {
                ...todo,
                isActive: true,
              }
      );

      return {
        ...state,
        todos: newTodos,
      };
    }
    case ActionTypes.COMPLETE_ALL_TODOS: {
      const newTodos = todos.map(
        (todo): ITodo =>
          !todo.isActive
            ? todo
            : {
                ...todo,
                isActive: false,
              }
      );
      return {
        ...state,
        todos: newTodos,
      };
    }
    case ActionTypes.CLEAR_COMPLETED_TODOS: {
      const newTodos = todos.filter(({ isActive }) => isActive);

      return {
        ...state,
        todos: newTodos,
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
