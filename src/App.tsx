import { FC } from "react";
import "./App.css";
import Logo from "./components/Logo";
import TodoMainComponent from "./components/todo/TodoMainComponent";
import TodoAppProvider from "./store/TodoAppProvider";

const App: FC = () => {
  return (
    <TodoAppProvider>
      <div className="App">
        <header>
          <Logo />
        </header>
        <section>
          <TodoMainComponent />
        </section>
      </div>
    </TodoAppProvider>
  );
};

export default App;
