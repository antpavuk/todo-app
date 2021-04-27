import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useIsAuthorized from "../../store/hooks/ selectors/useIsAuthorizedSelector";
import useTypedSelector from "../../store/hooks/ selectors/useTypedSelector";
import useActions from "../../store/hooks/useActions";
import RoutePaths from "../../types/enum/RoutePaths";
import INavLink from "../../types/interfaces/INavLink";
import Loader from "../Loader";
import ErrorModal from "../modal/ErrorModal";
import CurrentUserNavItem from "./CurrentUserNavItem";
import Logo from "./Logo";
import { logInNavLink, signUpNavLink } from "./NavLinkRoutes";

const Navbar = () => {
  let location = useLocation();

  const isAuthorized = useIsAuthorized();
  const { logOut } = useActions();

  const { request, error } = useTypedSelector(state => state.user);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { removeUserError } = useActions();

  const [navLinks, setNavLinks] = useState<INavLink[]>([]);

  const handleLogOut = () => {
    logOut();
  };
  const handleModalClose = () => {
    removeUserError();
  };

  if (error && !isModalOpen) {
    setIsModalOpen(true);
  } else if (!error && isModalOpen) {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (location.pathname === RoutePaths.LOGIN) {
      setNavLinks([signUpNavLink]);
    } else if (location.pathname === RoutePaths.SIGNUP) {
      setNavLinks([logInNavLink]);
    } else if (location.pathname === RoutePaths.MAIN) {
      setNavLinks([]);
    }
  }, [location]);

  if (request) {
    return <Loader />;
  }

  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-group">
        <ul className="nav-items">
          {navLinks.map(item => (
            <div className="nav-item" key={item.link}>
              <NavLink to={item.link} exact className="nav-link">
                {item.name}
              </NavLink>
            </div>
          ))}
          {isAuthorized && (
            <>
              <CurrentUserNavItem />
              <button className="nav-item" onClick={handleLogOut}>
                Log Out
              </button>
            </>
          )}
        </ul>
      </div>
      <ErrorModal
        {...{ isModalOpen, setIsModalOpen, handleModalClose, error }}
      />
    </nav>
  );
};

export default Navbar;
