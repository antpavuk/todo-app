import React, { FC, useEffect, useState } from "react";
import Filter from "./filter/Filter";
import TodoForm from "./TodoForm";
import TodoItem from "./items/TodoItem";
import useFilteredTodosSelector from "../../store/hooks/ selectors/useFilteredTodosSelector";
import useIsAnyTodoExistedSelector from "../../store/hooks/ selectors/useIsAnyTodoExistedSelector";
import useActions from "../../store/hooks/useActions";
import useTypedSelector from "../../store/hooks/ selectors/useTypedSelector";
import Loader from "../Loader";
import ErrorModal from "../modal/ErrorModal";

const TodoMainComponent: FC = () => {
  const { fetchTodos } = useActions();

  const filteredTodos = useFilteredTodosSelector();
  const isAnyTodoExisted = useIsAnyTodoExistedSelector();

  const { request, error } = useTypedSelector(state => state.todo);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { removeTodosError } = useActions();

  useEffect(() => {
    fetchTodos();
  }, []);

  if (error && !isModalOpen) {
    setIsModalOpen(true);
  } else if (!error && isModalOpen) {
    setIsModalOpen(false);
  }

  if (request) {
    setTimeout(() => <Loader />, 300);
  }

  const handleModalClose = () => {
    removeTodosError();
  };

  return (
    <section className="main">
      <TodoForm />
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} {...{ todo }} />
        ))}
      </div>
      {isAnyTodoExisted && <Filter />}
      <ErrorModal
        {...{ isModalOpen, setIsModalOpen, handleModalClose, error }}
      />
    </section>
  );
};

export default TodoMainComponent;
