import { useState, createContext, FC, Dispatch, SetStateAction } from "react";
import FilterActivityStatus from "../types/enum/FilterActivityStatus";

export type ContextType = {
  filterActivityStatus: FilterActivityStatus;
  setFilterActivityStatus: Dispatch<SetStateAction<FilterActivityStatus>>;
};

export const FilterActivityContext = createContext<ContextType>(
  {} as ContextType
);

export const FilterActivityProvider: FC = ({ children }) => {
  const [
    filterActivityStatus,
    setFilterActivityStatus,
  ] = useState<FilterActivityStatus>(FilterActivityStatus.ALL);

  return (
    <FilterActivityContext.Provider
      value={{
        filterActivityStatus,
        setFilterActivityStatus,
      }}
    >
      {children}
    </FilterActivityContext.Provider>
  );
};
