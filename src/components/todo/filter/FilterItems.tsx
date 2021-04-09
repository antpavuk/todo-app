import { FC, useContext } from "react";
import { FilterActivityContext } from "../../../store/context/FilterTodosActivityContext";

const FilterItems: FC = () => {
  const { filterActivityStatus, setFilterActivityStatus } = useContext(
    FilterActivityContext
  );
  const values = ["All", "Active", "Completed"];

  return (
    <ul className="todo-list-filter-items">
      {values.map((value, index) => (
        <li
          key={index}
          className={`todo-list-filter-item ${
            index === filterActivityStatus && "active"
          }`}
          onClick={() => setFilterActivityStatus(index)}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default FilterItems;
