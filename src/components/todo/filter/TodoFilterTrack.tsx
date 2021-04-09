import { FC } from "react";

interface ITodoFilterTrack {
  todoItemsLeft: number;
}

const TodoFilterTrack: FC<ITodoFilterTrack> = ({ todoItemsLeft }) => {
  return (
    <p
      className={`todo-list-left-track${!todoItemsLeft && " hidden"}`}
    >{`${todoItemsLeft} items left`}</p>
  );
};

export default TodoFilterTrack;
