enum AuthActionTypes {
  // sign up
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_REQUEST = "SIGN_UP_REQUEST",
  SIGN_UP_ERROR = "SIGN_UP_ERROR",

  // log in
  LOG_IN_SUCCESS = "LOG_IN_SUCCESS",
  LOG_IN_REQUEST = "LOG_IN_REQUEST",
  LOG_IN_ERROR = "LOG_IN_ERROR",

  // log out
  LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS",
  LOG_OUT_REQUEST = "LOG_OUT_REQUEST",
  LOG_OUT_ERROR = "LOG_OUT_ERROR",

  // update tokens
  UPDATE_TOKEN = "UPDATE_TOKEN",

  // remove auth error
  REMOVE_AUTH_ERROR = "REMOVE_AUTH_ERROR",
}

export default AuthActionTypes;
