import { ITokenState } from "../../../types/interfaces/ITokenState";
import { IUserSignUpData } from "../../../types/interfaces/IUser";
import AuthActionTypes from "../enum/AuthActionTypes";
import IAction from "./IAction";

export type SignUpActionSuccess = IAction<
  AuthActionTypes.SIGN_UP_SUCCESS,
  { tokenState: ITokenState }
>;
export type SignUpActionRequest = IAction<
  AuthActionTypes.SIGN_UP_REQUEST,
  { user: IUserSignUpData }
>;
export type SignUpActionError = IAction<
  AuthActionTypes.SIGN_UP_ERROR,
  { error: Error }
>;

export type LogInActionSuccess = IAction<
  AuthActionTypes.LOG_IN_SUCCESS,
  { tokenState: ITokenState }
>;
export type LogInActionRequest = IAction<
  AuthActionTypes.LOG_IN_REQUEST,
  { user: { email: string; password: string } }
>;
export type LogInActionError = IAction<
  AuthActionTypes.LOG_IN_ERROR,
  { error: Error }
>;

export type LogOutActionSuccess = IAction<AuthActionTypes.LOG_OUT_SUCCESS>;
export type LogOutActionRequest = IAction<AuthActionTypes.LOG_OUT_REQUEST>;
export type LogOutActionError = IAction<
  AuthActionTypes.LOG_OUT_ERROR,
  { error: Error }
>;

export type UpdateTokenAction = IAction<
  AuthActionTypes.UPDATE_TOKEN,
  { token: string }
>;

export type RemoveAuthErrorAction = IAction<AuthActionTypes.REMOVE_AUTH_ERROR>;

export type AuthAction =
  | SignUpActionSuccess
  | SignUpActionRequest
  | SignUpActionError
  | LogInActionSuccess
  | LogInActionRequest
  | LogInActionError
  | LogOutActionSuccess
  | LogOutActionRequest
  | LogOutActionError
  | UpdateTokenAction
  | RemoveAuthErrorAction;
