import React, { FC, useEffect, useState } from "react";
import Filter from "./filter/Filter";
import TodoForm from "./TodoForm";
import TodoItem from "./items/TodoItem";
import useFilteredTodosSelector from "../../store/hooks/ selectors/useFilteredTodosSelector";
import useIsAnyTodoExistedSelector from "../../store/hooks/ selectors/useIsAnyTodoExisted";
import useActions from "../../store/hooks/useActions";
import useTypedSelector from "../../store/hooks/ selectors/useTypedSelector";
import Modal from "../modal/Modal";
import Spinner from "react-bootstrap/esm/Spinner";
import ErrorMessage from "../modal/ErrorMessage";

const TodoMainComponent: FC = () => {
  const { fetchTodos } = useActions();
  const { request, error } = useTypedSelector(state => state.todo);

  const filteredTodos = useFilteredTodosSelector();
  const isAnyTodoExisted = useIsAnyTodoExistedSelector();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  if (error && !isModalOpen) {
    setIsModalOpen(true);
  } else if (!error && isModalOpen) {
    setIsModalOpen(false);
  }

  if (request) {
    setTimeout(() => <Spinner animation="border" variant="warning" />, 300);
  }

  return (
    <section className="main">
      <TodoForm />

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} {...{ todo }} />
        ))}
      </div>
      {isAnyTodoExisted && <Filter />}

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <ErrorMessage message={error?.message}></ErrorMessage>
      </Modal>
    </section>
  );
};

export default TodoMainComponent;
