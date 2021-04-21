import Axios from "axios";

const {
  NODE_ENV,
  REACT_APP_BASE_PRODUCTION_URL,
  REACT_APP_BASE_DEV_URL,
} = process.env;

const apiCall = Axios.create({
  baseURL:
    NODE_ENV === "production"
      ? REACT_APP_BASE_PRODUCTION_URL
      : REACT_APP_BASE_DEV_URL,
});

export const { get, put, post, delete: destroy } = apiCall;

export default apiCall;
