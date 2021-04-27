import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import useIsAuthorized from "../store/hooks/ selectors/useIsAuthorized";
import useTypedSelector from "../store/hooks/ selectors/useTypedSelector";
import useActions from "../store/hooks/useActions";
import LogInForm from "./forms/LogInForm";
import SignUpForm from "./forms/SignUpForm";
import Loader from "./Loader";
import ErrorModal from "./modal/ErrorModal";
import TodoMainComponent from "./todo/TodoMainComponent";

const LandingPage = () => {
  const isAuthorized = useIsAuthorized();

  const { request, error } = useTypedSelector(state => state.auth);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { removeAuthError } = useActions();

  const handleModalClose = () => {
    removeAuthError();
  };

  if (error && !isModalOpen) {
    setIsModalOpen(true);
  } else if (!error && isModalOpen) {
    setIsModalOpen(false);
  }

  if (request) {
    return <Loader />;
  }

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isAuthorized ? <TodoMainComponent /> : <Redirect to="/signup" />
          }
        />
        <Route
          exact
          path="/signup"
          render={() => (isAuthorized ? <Redirect to="/" /> : <SignUpForm />)}
        />
        <Route
          exact
          path="/login"
          render={() => (isAuthorized ? <Redirect to="/" /> : <LogInForm />)}
        />
        <Redirect to="/" />
      </Switch>
      <ErrorModal
        {...{ isModalOpen, setIsModalOpen, handleModalClose, error }}
      />
    </>
  );
};

export default LandingPage;
