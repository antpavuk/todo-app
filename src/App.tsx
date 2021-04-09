import { FC } from "react";
import "./App.css";
import Logo from "./components/Logo";
import TodoMainComponent from "./components/todo/TodoMainComponent";
import { TodosProvider } from "./store/context/TodosContext";
import { FilterActivityProvider } from "./store/context/FilterTodosActivityContext";

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
