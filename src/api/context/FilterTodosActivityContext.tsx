import { useState, createContext, FC, Dispatch, SetStateAction } from "react";

export enum FilterActivityStatus {
  ALL,
  ACTIVE,
  COMPLETED,
}

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
  ] = useState<FilterActivityStatus>(0);

  return (
    <FilterActivityContext.Provider
      value={{
        filterActivityStatus: filterActivityStatus,
        setFilterActivityStatus: setFilterActivityStatus,
      }}
    >
      {children}
    </FilterActivityContext.Provider>
  );
};
