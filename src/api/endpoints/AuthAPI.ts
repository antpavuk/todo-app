import { IUserSignUpData } from "../../types/interfaces/IUser";
import { post, put } from "../apiCall";

class AuthAPI {
  private static readonly baseURL = "/api/auth";

  public static async signUp({
    email,
    password,
    username,
    age,
  }: IUserSignUpData) {
    const url = AuthAPI.getFullEndpointUrl("signup");

    return await post(url, { email, password, username, age });
  }

  public static async logIn(email: string, password: string) {
    const url = AuthAPI.getFullEndpointUrl("login");

    return await put(url, { email, password });
  }

  public static async logOut() {
    const url = AuthAPI.getFullEndpointUrl("logout");

    return await put(url);
  }

  private static getFullEndpointUrl(addon: string) {
    return `${AuthAPI.baseURL}/${addon}`;
  }
}

export default AuthAPI;
