import { FC, useEffect } from "react";
import Filter from "./filter/Filter";
import TodoForm from "./TodoForm";
import TodoItem from "./items/TodoItem";
import useFilteredTodosSelector from "../../store/hooks/ selectors/useFilteredTodosSelector";
import useIsAnyTodoExistedSelector from "../../store/hooks/ selectors/useIsAnyTodoExisted";
import useActions from "../../store/hooks/useActions";
import useTypedSelector from "../../store/hooks/ selectors/useTypedSelector";

const TodoMainComponent: FC = () => {
  const { fetchTodos } = useActions();
  const { error } = useTypedSelector(state => state.todo);

  const filteredTodos = useFilteredTodosSelector();
  const isAnyTodoExisted = useIsAnyTodoExistedSelector();

  useEffect(() => {
    fetchTodos();
  }, []);

  if (error) {
    return <p>"why"</p>;
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
    </section>
  );
};

export default TodoMainComponent;
