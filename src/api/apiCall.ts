import Axios from "axios";
import TokenKeys from "../types/enum/TokenKeys";

const {
  NODE_ENV,
  REACT_APP_BASE_PRODUCTION_URL,
  REACT_APP_BASE_DEV_URL,
} = process.env;

const baseURL =
  NODE_ENV === "production"
    ? REACT_APP_BASE_PRODUCTION_URL
    : REACT_APP_BASE_DEV_URL;
const apiCall = Axios.create({
  baseURL,
});

apiCall.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem(TokenKeys.TOKEN);

    if (accessToken) {
      config.headers["authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

apiCall.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    try {
      const originalRequest = error.config;
      let refreshToken = localStorage.getItem(TokenKeys.REFRESH_TOKEN);

      if (
        refreshToken &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        const res = await apiCall.post(`${baseURL}/api/auth/refresh`, {
          refreshToken,
        });

        if (res.status === 201) {
          localStorage.setItem(TokenKeys.TOKEN, res.data.token);
          localStorage.setItem(TokenKeys.REFRESH_TOKEN, res.data.refreshToken);
          return apiCall(originalRequest);
        }
        localStorage.removeItem(TokenKeys.TOKEN);
        localStorage.removeItem(TokenKeys.REFRESH_TOKEN);
      }
    } catch (err) {
      return Promise.reject(err);
    }

    return Promise.reject(error);
  }
);

export const { get, put, post, delete: destroy } = apiCall;

export default apiCall;
