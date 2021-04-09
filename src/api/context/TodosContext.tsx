import { useState, createContext, FC, useCallback } from "react";
import ITodo from "../Todo";

export type ContextType = {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  removeTodoByIndex: (i: number) => void;
  changeTodoActivityByIndex: (i: number) => void;
  changeTodoValueByIndex: (value: string, i: number) => void;
  completeAllTodos: () => void;
  activateAllTodos: () => void;
  clearCompletedTodos: () => void;
};

export const TodosContext = createContext<ContextType>({} as ContextType);

export const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo): void => setTodos([todo, ...todos]);

  const removeTodoByIndex = (i: number): void => {
    const newTodos = todos.filter((_todo, todoIndex) => todoIndex !== i);

    setTodos(newTodos);
  };

  const changeTodoActivityByIndex = (i: number): void => {
    const newTodos: ITodo[] = todos.map(
      (todo, todoIndex): ITodo =>
        todoIndex === i ? { ...todo, isActive: !todo.isActive } : todo
    );

    setTodos(newTodos);
  };

  const changeTodoValueByIndex = useCallback(
    (value: string, i: number): void => {
      const newTodos: ITodo[] = todos.map(
        (todo, todoIndex): ITodo => {
          return todoIndex === i ? { ...todo, value } : todo;
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
