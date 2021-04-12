import { FC } from "react";
import "./App.css";
import Logo from "./components/Logo";
import TodoMainComponent from "./components/todo/TodoMainComponent";
import { TodosProvider } from "./store/TodosContext";
import { FilterActivityProvider } from "./store/FilterTodosActivityContext";
import TodosAppProvider from "./store/TodosAppProvider";

const App: FC = () => {
  return (
    <TodosProvider>
      <TodosAppProvider>
        <div className="App">
          <header>
            <Logo />
          </header>
          <section>
            <FilterActivityProvider>
              <TodoMainComponent />
            </FilterActivityProvider>
          </section>
        </div>
      </TodosAppProvider>
    </TodosProvider>
  );
};

export default App;
