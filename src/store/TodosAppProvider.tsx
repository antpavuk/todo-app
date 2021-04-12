import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./Store";

const TodosAppProvider: FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default TodosAppProvider;
