import { FC, useState } from "react";
import { useActions } from "../../../store/hooks";
import ITodo from "../../../types/interfaces/ITodo";
import DeleteButton from "../buttons/DeleteButton";
import TodoItemCheckbox from "./TodoItemCheckbox";
import TodoItemValue from "./TodoItemValue";

interface ITodoItemProps {
  todo: ITodo;
  index: number;
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const { id } = todo;
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { toggleTodoActivityById, removeTodoById } = useActions();

  const handleChangeActivity = () => {
    toggleTodoActivityById(id);
  };

  const handleRemoveTodoItem = () => {
    removeTodoById(id);
  };

  return (
    <div className="todo-list-item">
      <TodoItemCheckbox
        isActive={todo.isActive}
        onClick={handleChangeActivity}
      />
      <TodoItemValue editTools={{ isEditing, setIsEditing }} {...{ todo }} />
      <DeleteButton isActive={!isEditing} onClick={handleRemoveTodoItem} />
    </div>
  );
};

export default TodoItem;
