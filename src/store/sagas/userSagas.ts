import { AxiosResponse } from "axios";
import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import UserAPI from "../../api/endpoints/UserAPI";
import {
  getCurrentUserError,
  getCurrentUseSuccess,
} from "../action-creators/userActionCreators";
import UserActionTypes from "../store-types/enum/UserActionTypes";

function* getCurrentUserWorker() {
  try {
    const response: AxiosResponse = yield call(UserAPI.getCurrentUser);

    yield put(getCurrentUseSuccess(response.data.user));
  } catch (error) {
    yield put(getCurrentUserError(error));
  }
}

export default function* userSaga(): Generator<StrictEffect> {
  yield takeEvery(
    UserActionTypes.GET_CURRENT_USER_REQUEST,
    getCurrentUserWorker
  );
}
