import { FC } from "react";
import "./App.css";
import Logo from "./components/Logo";
import TodoMainComponent from "./components/todo/TodoMainComponent";
import TodosAppProvider from "./store/TodosAppProvider";

const App: FC = () => {
  return (
    <TodosAppProvider>
      <div className="App">
        <header>
          <Logo />
        </header>
        <section>
          <TodoMainComponent />
        </section>
      </div>
    </TodosAppProvider>
  );
};

export default App;
