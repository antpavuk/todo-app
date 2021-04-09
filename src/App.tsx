import { FC } from "react";
import "./App.css";
import Logo from "./components/Logo";
import TodoMainComponent from "./components/todo/TodoMainComponent";
import { TodosProvider } from "./api/context/TodosContext";
import { FilterActivityProvider } from "./api/context/FilterTodosActivityContext";

const App: FC = () => {
  return (
    <TodosProvider>
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
    </TodosProvider>
  );
};

export default App;
