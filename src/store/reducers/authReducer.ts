import AuthActionTypes from "../store-types/enum/AuthActionTypes";
import { AuthAction } from "../store-types/actions/AuthAction";
import { ITokenState } from "../../types/interfaces/ITokenState";
import TokenKeys from "../../types/enum/TokenKeys";

type AuthReducerState = {
  tokenState: ITokenState | null;
  request: boolean;
  error: Error | null;
};

const initialState: AuthReducerState = {
  tokenState: null,
  request: true,
  error: null,
};

const setSuccessState = (
  state: AuthReducerState,
  tokenState: ITokenState
): AuthReducerState => ({
  ...state,
  tokenState,
  request: false,
  error: null,
});

const setRequestState = (state: AuthReducerState): AuthReducerState => ({
  ...state,
  request: true,
  error: null,
});

const setErrorState = (
  state: AuthReducerState,
  error: Error
): AuthReducerState => ({
  ...state,
  request: false,
  error,
});

const authReducer = (
  state: AuthReducerState = initialState,
  action: AuthAction
): AuthReducerState => {
  switch (action.type) {
    case AuthActionTypes.SIGN_UP_SUCCESS: {
      const { token, refreshToken } = action.payload!.tokenState;

      try {
        localStorage.setItem(TokenKeys.TOKEN, token!);
        localStorage.setItem(TokenKeys.REFRESH_TOKEN, refreshToken!);

        return setSuccessState(state, { token, refreshToken });
      } catch (err) {
        return setErrorState(state, err);
      }
    }

    case AuthActionTypes.SIGN_UP_REQUEST: {
      return setRequestState(state);
    }

    case AuthActionTypes.SIGN_UP_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case AuthActionTypes.LOG_IN_SUCCESS: {
      const { token, refreshToken } = action.payload!.tokenState;
      try {
        localStorage.setItem(TokenKeys.TOKEN, token!);
        localStorage.setItem(TokenKeys.REFRESH_TOKEN, refreshToken!);

        return setSuccessState(state, { token, refreshToken });
      } catch (err) {
        return setErrorState(state, err);
      }
    }

    case AuthActionTypes.LOG_IN_REQUEST: {
      return setRequestState(state);
    }

    case AuthActionTypes.LOG_IN_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case AuthActionTypes.LOG_OUT_SUCCESS: {
      try {
        localStorage.removeItem(TokenKeys.TOKEN);
        localStorage.removeItem(TokenKeys.REFRESH_TOKEN);

        return setSuccessState(state, {
          token: undefined,
          refreshToken: undefined,
        });
      } catch (err) {
        return setErrorState(state, err);
      }
    }

    case AuthActionTypes.LOG_OUT_REQUEST: {
      return setRequestState(state);
    }

    case AuthActionTypes.LOG_OUT_ERROR: {
      return setErrorState(state, action.payload!.error);
    }

    case AuthActionTypes.UPDATE_TOKEN: {
      const tokenState = {
        ...state.tokenState,
        token: action.payload!.token,
      } as ITokenState;
      console.log(tokenState);

      return { ...state, tokenState };
    }
    case AuthActionTypes.REMOVE_AUTH_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
