import { FC } from "react";
import useFilterTodosActivityStatusSelector from "../../../store/hooks/ selectors/useFilterTodosActivityStatusSelector";
import useActions from "../../../store/hooks/useActions";

const FilterItems: FC = () => {
  const filterTodosActivityStatus = useFilterTodosActivityStatusSelector();

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
