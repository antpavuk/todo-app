import { useState, createContext, FC, useCallback } from "react";
import ITodo from "../types/interfaces/ITodo";

export type ContextType = {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  removeTodoByIndex: (index: number) => void;
  changeTodoActivityByIndex: (index: number) => void;
  changeTodoValueByIndex: (value: string, index: number) => void;
  completeAllTodos: () => void;
  activateAllTodos: () => void;
  clearCompletedTodos: () => void;
};

//export const store = createStore();

export const TodosContext = createContext<ContextType>({} as ContextType);

export const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo): void => setTodos([todo, ...todos]);

  const removeTodoByIndex = (index: number): void => {
    const newTodos = todos.filter((_todo, todoIndex) => todoIndex !== index);

    setTodos(newTodos);
  };

  const changeTodoActivityByIndex = (index: number): void => {
    const newTodos: ITodo[] = todos.map(
      (todo, todoIndex): ITodo =>
        todoIndex === index ? { ...todo, isActive: !todo.isActive } : todo
    );

    setTodos(newTodos);
  };

  const changeTodoValueByIndex = useCallback(
    (value: string, index: number): void => {
      const newTodos: ITodo[] = todos.map(
        (todo, todoIndex): ITodo => {
          return todoIndex === index ? { ...todo, value } : todo;
        }
      );

      setTodos(newTodos);
    },
    [todos]
  );

  const activateAllTodos = useCallback((): void => {
    const newTodos: ITodo[] = todos.map(
      (todo): ITodo => ({
        ...todo,
        isActive: true,
      })
    );

    setTodos(newTodos);
  }, [todos]);

  const completeAllTodos = useCallback((): void => {
    const newTodos: ITodo[] = todos.map(
      (todo): ITodo => ({
        ...todo,
        isActive: false,
      })
    );

    setTodos(newTodos);
  }, [todos]);

  const clearCompletedTodos = useCallback(() => {
    const newTodos = todos.filter(({ isActive }) => isActive);

    setTodos(newTodos);
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodoByIndex,
        changeTodoValueByIndex,
        changeTodoActivityByIndex,
        activateAllTodos,
        completeAllTodos,
        clearCompletedTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
