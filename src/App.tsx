import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";

import RoutesWrapper from "./components/RoutesWrapper";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section className="landing">
          <RoutesWrapper />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
