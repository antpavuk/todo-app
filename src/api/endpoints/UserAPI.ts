import { get } from "../apiCall";

class UserAPI {
  private static readonly baseURL = "/api/users";

  public static async getCurrentUser() {
    const url = UserAPI.getFullEndpointUrl("current");

    return await get(url);
  }

  private static getFullEndpointUrl(addon: string) {
    return `${UserAPI.baseURL}/${addon}`;
  }
}

export default UserAPI;
