import Axios from "axios";

const {
  NODE_ENV,
  REACT_APP_BASE_PRODUCTION_URL,
  REACT_APP_BASE_DEV_URL,
} = process.env;

export default Axios.create({
  baseURL:
    NODE_ENV === "production"
      ? REACT_APP_BASE_PRODUCTION_URL
      : REACT_APP_BASE_DEV_URL,
});
