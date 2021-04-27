import { ITokenState } from "../../types/interfaces/ITokenState";
import {
  LogInActionError,
  LogInActionRequest,
  LogInActionSuccess,
  LogOutActionError,
  LogOutActionRequest,
  LogOutActionSuccess,
  RemoveAuthErrorAction,
  SignUpActionError,
  SignUpActionRequest,
  SignUpActionSuccess,
  UpdateTokenAction,
} from "../store-types/actions/AuthAction";
import AuthActionTypes from "../store-types/enum/AuthActionTypes";

export const signUp = (
  email: string,
  password: string,
  username: string,
  age: number
): SignUpActionRequest => {
  const user = { email, password, username, age };

  return {
    type: AuthActionTypes.SIGN_UP_REQUEST,
    payload: { user },
  };
};

export const signUpSuccess = (tokenState: ITokenState): SignUpActionSuccess => {
  return {
    type: AuthActionTypes.SIGN_UP_SUCCESS,
    payload: { tokenState },
  };
};

export const signUpError = (error: any): SignUpActionError => ({
  type: AuthActionTypes.SIGN_UP_ERROR,
  payload: { error },
});

export const logIn = (email: string, password: string): LogInActionRequest => {
  const user = { email, password };

  return {
    type: AuthActionTypes.LOG_IN_REQUEST,
    payload: { user },
  };
};

export const logInSuccess = (tokenState: ITokenState): LogInActionSuccess => {
  return {
    type: AuthActionTypes.LOG_IN_SUCCESS,
    payload: { tokenState },
  };
};

export const logInError = (error: any): LogInActionError => ({
  type: AuthActionTypes.LOG_IN_ERROR,
  payload: { error },
});

export const logOut = (): LogOutActionRequest => ({
  type: AuthActionTypes.LOG_OUT_REQUEST,
});

export const logOutSuccess = (): LogOutActionSuccess => ({
  type: AuthActionTypes.LOG_OUT_SUCCESS,
});

export const logOutError = (error: any): LogOutActionError => ({
  type: AuthActionTypes.LOG_OUT_ERROR,
  payload: { error },
});

export const updateToken = (token: string): UpdateTokenAction => {
  return {
    type: AuthActionTypes.UPDATE_TOKEN,
    payload: { token },
  };
};

export const removeAuthError = (): RemoveAuthErrorAction => ({
  type: AuthActionTypes.REMOVE_AUTH_ERROR,
});
