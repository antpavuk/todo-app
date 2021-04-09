import { FC, useContext } from "react";
import { FilterActivityContext } from "../../../api/context/FilterTodosActivityContext";

const FilterItems: FC = () => {
  const { filterActivityStatus, setFilterActivityStatus } = useContext(
    FilterActivityContext
  );
  const values = ["All", "Active", "Completed"];

  return (
    <ul className="todo-list-filter-items">
      {values &&
        values.map((value, i) => (
          <li
            key={i}
            className={`todo-list-filter-item ${
              i === filterActivityStatus && "active"
            }`}
            onClick={() => setFilterActivityStatus(i)}
          >
            {value}
          </li>
        ))}
    </ul>
  );
};

export default FilterItems;
