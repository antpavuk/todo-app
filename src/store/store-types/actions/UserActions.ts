import IUser from "../../../types/interfaces/IUser";
import UserActionTypes from "../enum/UserActionTypes";
import IAction from "./IAction";

// fetch todos
export type UserActionSuccess = IAction<
  UserActionTypes.GET_CURRENT_USER_SUCCESS,
  { user: IUser }
>;
export type UserActionRequest = IAction<
  UserActionTypes.GET_CURRENT_USER_REQUEST,
  { user: IUser }
>;
export type UserActionError = IAction<
  UserActionTypes.GET_CURRENT_USER_ERROR,
  { error: Error }
>;

export type RemoveUserErrorAction = IAction<UserActionTypes.REMOVE_USER_ERROR>;

type UserAction =
  | UserActionRequest
  | UserActionSuccess
  | UserActionError
  | RemoveUserErrorAction;

export default UserAction;
