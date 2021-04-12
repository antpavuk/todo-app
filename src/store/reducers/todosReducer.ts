import ITodo from "../../types/interfaces/ITodo";
import { TodosActionTypes } from "../store-types/TodosActionTypes";
import { TodosAction } from "../store-types/TodosActions";

const initialState: ITodo[] = [];

const todosReducer = (
  state: ITodo[] = initialState,
  action: TodosAction
): ITodo[] => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return action.payload ? [action.payload.todo, ...state] : state;

    case TodosActionTypes.REMOVE_TODO:
      return state.filter(todo => todo?.id !== action?.payload?.id);

    case TodosActionTypes.TOGGLE_TODO_ACTIVITY:
      return state.map(
        (todo): ITodo =>
          todo.id === action.payload?.id
            ? { ...todo, isActive: !todo.isActive }
            : todo
      );

    case TodosActionTypes.UPDATE_TODO_VALUE: {
      if (!action.payload) return state;

      const { value, id } = action.payload;

      return state.map(
        (todo): ITodo => {
          return todo.id === id ? { ...todo, value } : todo;
        }
      );
    }
    case TodosActionTypes.ACTIVATE_ALL_TODOS:
      return state.map(
        (todo): ITodo =>
          todo.isActive
            ? todo
            : {
                ...todo,
                isActive: true,
              }
      );

    case TodosActionTypes.COMPLETE_ALL_TODOS:
      return state.map(
        (todo): ITodo =>
          !todo.isActive
            ? todo
            : {
                ...todo,
                isActive: false,
              }
      );
    case TodosActionTypes.CLEAR_COMPLETED_TODOS:
      return state.filter(({ isActive }) => isActive);
    default:
      return state;
  }
};

export default todosReducer;
