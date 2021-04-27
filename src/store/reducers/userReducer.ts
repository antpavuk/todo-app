import IUser from "../../types/interfaces/IUser";
import UserAction from "../store-types/actions/UserActions";
import UserActionTypes from "../store-types/enum/UserActionTypes";

type UserReducerState = {
  user: IUser | null;
  request: boolean;
  error: Error | null;
};

const initialState: UserReducerState = {
  user: null,
  request: true,
  error: null,
};

const setSuccessState = (
  state: UserReducerState,
  user: IUser | null
): UserReducerState => ({
  ...state,
  user,
  request: false,
  error: null,
});

const setRequestState = (state: UserReducerState): UserReducerState => ({
  ...state,
  request: true,
  error: null,
});

const setErrorState = (
  state: UserReducerState,
  error: Error
): UserReducerState => ({
  ...state,
  request: false,
  error,
});

const userReducer = (
  state: UserReducerState = initialState,
  action: UserAction
): UserReducerState => {
  switch (action.type) {
    case UserActionTypes.GET_CURRENT_USER_SUCCESS: {
      return setSuccessState(state, action.payload!.user);
    }

    case UserActionTypes.GET_CURRENT_USER_REQUEST: {
      return setRequestState(state);
    }

    case UserActionTypes.GET_CURRENT_USER_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case UserActionTypes.REMOVE_USER_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
