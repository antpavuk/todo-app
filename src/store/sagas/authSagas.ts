import { AxiosResponse } from "axios";
import { call, put, select, StrictEffect, takeEvery } from "redux-saga/effects";
import AuthAPI from "../../api/endpoints/AuthAPI";
import TokenKeys from "../../types/enum/TokenKeys";
import {
  logIn,
  logInError,
  logInSuccess,
  logOut,
  logOutError,
  logOutSuccess,
  signUpError,
  signUpSuccess,
  updateToken,
} from "../action-creators/authActionCreators";
import {
  LogInActionRequest,
  SignUpActionRequest,
} from "../store-types/actions/AuthAction";
import AuthActionTypes from "../store-types/enum/AuthActionTypes";

function* signUpWorker({ payload }: SignUpActionRequest) {
  try {
    const response: AxiosResponse = yield call(AuthAPI.signUp, payload!.user);

    const { token, refreshToken } = response.data;

    yield put(signUpSuccess({ token, refreshToken }));

    const { email, password } = payload!.user;
    yield put(logIn(email, password));
  } catch (error) {
    yield put(signUpError(error));
  }
}

function* logInWorker({ payload }: LogInActionRequest) {
  try {
    const { email, password } = payload!.user;
    const response: AxiosResponse = yield call(AuthAPI.logIn, email, password);

    const { token, refreshToken } = response.data;

    yield put(logInSuccess({ token, refreshToken }));
  } catch (error) {
    yield put(logInError(error));
  }
}

function* logOutWorker() {
  try {
    const response: AxiosResponse = yield call(AuthAPI.logOut);

    if (response) yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutError(error));
  }
}

function* updateTokens() {
  try {
    const currentToken: string = yield select(state => state.currentToken);
    const token = localStorage.getItem(TokenKeys.TOKEN);

    if (token && token !== currentToken) yield put(updateToken(token));

    if (!token) yield call(logOut);
  } catch (error) {
    yield call(logOut);
  }
}

export default function* authSaga(): Generator<StrictEffect> {
  yield call(updateTokens);
  yield takeEvery(AuthActionTypes.SIGN_UP_REQUEST, signUpWorker);
  yield takeEvery(AuthActionTypes.LOG_OUT_REQUEST, logOutWorker);
  yield takeEvery(AuthActionTypes.LOG_IN_REQUEST, logInWorker);
}
