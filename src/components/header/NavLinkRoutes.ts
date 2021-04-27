import RoutePaths from "../../types/enum/RoutePaths";
import INavLink from "../../types/interfaces/INavLink";

class NavLink implements INavLink {
  public name: string;
  public link: RoutePaths;

  constructor(name: string, link: RoutePaths) {
    this.name = name;
    this.link = link;
  }
}

export const signUpNavLink = new NavLink("Sign Up", RoutePaths.SIGNUP);
export const logInNavLink = new NavLink("Log In", RoutePaths.LOGIN);
