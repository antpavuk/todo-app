import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import sagaMiddleware from "./sagas/sagaMiddleware";
import logger from "redux-logger";
import todosSaga from "./sagas/todosSagas";

const middlewares: any = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(todosSaga);
