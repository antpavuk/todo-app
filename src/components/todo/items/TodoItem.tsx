import React, { FC, useContext, useState } from "react";
import { TodosContext } from "../../../api/context/TodosContext";
import ITodo from "../../../api/Todo";
import DeleteButton from "../buttons/DeleteButton";
import TodoItemCheckbox from "./TodoItemCheckbox";
import TodoItemValue from "./TodoItemValue";

interface ITodoItemProps {
  todo: ITodo;
  i: number;
}

const TodoItem: FC<ITodoItemProps> = ({ todo, i }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { changeTodoActivityByIndex, removeTodoByIndex } = useContext(
    TodosContext
  );

  const handleChangeActivity = () => {
    changeTodoActivityByIndex(i);
  };

  const handleRemoveTodoItem = () => {
    removeTodoByIndex(i);
  };

  return (
    <div className="todo-list-item">
      <TodoItemCheckbox
        isActive={todo.isActive}
        onClick={handleChangeActivity}
      />
      <TodoItemValue editTools={{ isEditing, setIsEditing }} {...{ todo, i }} />
      <DeleteButton isActive={!isEditing} onClick={handleRemoveTodoItem} />
    </div>
  );
};

export default TodoItem;
