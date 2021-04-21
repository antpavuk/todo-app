import { get, post, put, destroy } from "../apiCall";

class TodoAPI {
  private static readonly baseURL = "/api/todos";

  public static async fetchTodos() {
    return await get(TodoAPI.baseURL);
  }

  public static async addTodo(value: string) {
    return await post(TodoAPI.baseURL, { value });
  }

  public static async toggleTodoActivityById(id: string, isActive: boolean) {
    const url = TodoAPI.getBaseUrlWithId(id);

    return await put(url, { isActive: !isActive });
  }

  public static async updateTodoValueById(value: string, id: string) {
    const url = TodoAPI.getBaseUrlWithId(id);

    return await put(url, { value });
  }

  public static async activateAllTodos() {
    return await put(TodoAPI.baseURL, null, {
      params: { action: "activate" },
    });
  }

  public static async completeAllTodos() {
    return await put(TodoAPI.baseURL, null, {
      params: { action: "complete" },
    });
  }

  public static async removeTodoById(id: string) {
    const url = TodoAPI.getBaseUrlWithId(id);

    return await destroy(url);
  }

  public static async clearCompletedTodos() {
    return await destroy(TodoAPI.baseURL, {
      params: {
        isActive: false,
      },
    });
  }

  private static getBaseUrlWithId(id: string) {
    return `${TodoAPI.baseURL}/${id}`;
  }
}

export default TodoAPI;
