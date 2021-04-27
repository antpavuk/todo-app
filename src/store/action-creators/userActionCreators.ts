import IUser from "../../types/interfaces/IUser";
import {
  RemoveUserErrorAction,
  UserActionError,
  UserActionRequest,
  UserActionSuccess,
} from "../store-types/actions/UserActions";
import UserActionTypes from "../store-types/enum/UserActionTypes";

export const getCurrentUser = (): UserActionRequest => ({
  type: UserActionTypes.GET_CURRENT_USER_REQUEST,
});

export const getCurrentUseSuccess = (user: IUser): UserActionSuccess => ({
  type: UserActionTypes.GET_CURRENT_USER_SUCCESS,
  payload: { user },
});

export const getCurrentUserError = (error: any): UserActionError => ({
  type: UserActionTypes.GET_CURRENT_USER_ERROR,
  payload: { error },
});

export const removeUserError = (): RemoveUserErrorAction => ({
  type: UserActionTypes.REMOVE_USER_ERROR,
});
