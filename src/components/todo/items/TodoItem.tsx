import React, { FC, useContext, useState } from "react";
import { TodosContext } from "../../../store/context/TodosContext";
import ITodo from "../../../types/interfaces/ITodo";
import DeleteButton from "../buttons/DeleteButton";
import TodoItemCheckbox from "./TodoItemCheckbox";
import TodoItemValue from "./TodoItemValue";

interface ITodoItemProps {
  todo: ITodo;
  index: number;
}

const TodoItem: FC<ITodoItemProps> = ({ todo, index }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { changeTodoActivityByIndex, removeTodoByIndex } = useContext(
    TodosContext
  );

  const handleChangeActivity = () => {
    changeTodoActivityByIndex(index);
  };

  const handleRemoveTodoItem = () => {
    removeTodoByIndex(index);
  };

  return (
    <div className="todo-list-item">
      <TodoItemCheckbox
        isActive={todo.isActive}
        onClick={handleChangeActivity}
      />
      <TodoItemValue
        editTools={{ isEditing, setIsEditing }}
        {...{ todo, index }}
      />
      <DeleteButton isActive={!isEditing} onClick={handleRemoveTodoItem} />
    </div>
  );
};

export default TodoItem;
