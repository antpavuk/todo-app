import { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";

import LandingPage from "./components/LandingPage";
import TokenKeys from "./types/enum/TokenKeys";
import useToken from "./store/hooks/ selectors/useToken";
import useActions from "./store/hooks/useActions";

const App: FC = () => {
  const { updateToken, logOut } = useActions();
  const currentToken = useToken();

  useEffect(() => {
    const updateTokens = () => {
      try {
        const token = localStorage.getItem(TokenKeys.TOKEN);
        if (token && token !== currentToken) updateToken(token);

        if (!token) logOut();
      } catch (error) {
        logOut();
      }
    };

    updateTokens();
  }, [localStorage.getItem]);

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section className="landing">
          <LandingPage />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
