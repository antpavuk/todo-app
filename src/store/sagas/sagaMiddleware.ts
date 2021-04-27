import createSagaMiddleware from "redux-saga";
import { all, call } from "redux-saga/effects";
import authSaga from "./authSagas";
import todosSaga from "./todosSagas";
import userSaga from "./userSagas";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([call(authSaga), call(userSaga), call(todosSaga)]);
}

export default sagaMiddleware;
