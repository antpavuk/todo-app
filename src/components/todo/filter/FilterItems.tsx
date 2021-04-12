import { FC } from "react";
import { useActions, useRootStateSelector } from "../../../store/hooks";

const FilterItems: FC = () => {
  const { filterTodosActivityStatus } = useRootStateSelector(state => state);
  const { updateFilterActivityStatus } = useActions();
  const values = ["All", "Active", "Completed"];

  return (
    <ul className="todo-list-filter-items">
      {values.map((value, index) => (
        <li
          key={index}
          className={`todo-list-filter-item ${
            index === filterTodosActivityStatus && "active"
          }`}
          onClick={() => updateFilterActivityStatus(index)}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default FilterItems;
