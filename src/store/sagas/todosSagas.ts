import { AxiosResponse } from "axios";
import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import TodoAPI from "../../api/endpoints/TodoAPI";
import {
  activateAllTodosError,
  activateAllTodosSuccess,
  addTodoError,
  addTodoSuccess,
  clearCompletedTodosError,
  clearCompletedTodosSuccess,
  completeAllTodosError,
  completeAllTodosSuccess,
  fetchTodosError,
  fetchTodosSuccess,
  removeTodoByIdError,
  removeTodoByIdSuccess,
  toggleTodoActivityByIdError,
  toggleTodoActivityByIdSuccess,
  updateTodoValueByIdError,
  updateTodoValueByIdSuccess,
} from "../ActionCreators";
import ActionTypes from "../store-types/ActionTypes";
import {
  AddTodoActionRequest,
  RemoveTodoActionRequest,
  ToggleTodoActivityActionRequest,
  UpdateTodoValueActionRequest,
} from "../store-types/TodosActions";

export default function* todosSaga(): Generator<StrictEffect> {
  yield takeEvery(ActionTypes.FETCH_TODOS_REQUEST, fetchTodosWorker);
  yield takeEvery(ActionTypes.ADD_TODO_REQUEST, addTodoWorker);
  yield takeEvery(
    ActionTypes.TOGGLE_TODO_ACTIVITY_REQUEST,
    toggleTodoActivityByIdWorker
  );
  yield takeEvery(
    ActionTypes.UPDATE_TODO_VALUE_REQUEST,
    updateTodoValueByIdWorker
  );
  yield takeEvery(
    ActionTypes.ACTIVATE_ALL_TODOS_REQUEST,
    activateAllTodosWorker
  );
  yield takeEvery(
    ActionTypes.COMPLETE_ALL_TODOS_REQUEST,
    completeAllTodosWorker
  );
  yield takeEvery(ActionTypes.REMOVE_TODO_REQUEST, removeTodoByIdWorker);
  yield takeEvery(
    ActionTypes.CLEAR_COMPLETED_TODOS_REQUEST,
    clearCompletedTodosWorker
  );
}

function* fetchTodosWorker() {
  try {
    const response: AxiosResponse = yield call(TodoAPI.fetchTodos);
    yield put(fetchTodosSuccess(response.data.todos));
  } catch (error) {
    yield put(fetchTodosError(error));
  }
}

function* addTodoWorker({ payload }: AddTodoActionRequest) {
  try {
    const { value } = payload!;

    const response: AxiosResponse = yield call(TodoAPI.addTodo, value);
    yield put(addTodoSuccess(response.data.todo));
  } catch (error) {
    yield put(addTodoError(error));
  }
}

function* toggleTodoActivityByIdWorker({
  payload,
}: ToggleTodoActivityActionRequest) {
  try {
    const { id, isActive } = payload!.todo;

    const response: AxiosResponse = yield call(
      TodoAPI.toggleTodoActivityById,
      id,
      isActive
    );
    yield put(toggleTodoActivityByIdSuccess(response.data.todo.id));
  } catch (error) {
    yield put(toggleTodoActivityByIdError(error));
  }
}

function* updateTodoValueByIdWorker({ payload }: UpdateTodoValueActionRequest) {
  try {
    const { id, value } = payload!;

    const response: AxiosResponse = yield call(
      TodoAPI.updateTodoValueById,
      value,
      id
    );

    yield put(
      updateTodoValueByIdSuccess(
        response.data.todo.value,
        response.data.todo.id
      )
    );
  } catch (error) {
    yield put(updateTodoValueByIdError(error));
  }
}

function* activateAllTodosWorker() {
  try {
    const response: AxiosResponse = yield call(TodoAPI.activateAllTodos);

    yield put(activateAllTodosSuccess(response.data.todos));
  } catch (error) {
    yield put(activateAllTodosError(error));
  }
}

function* completeAllTodosWorker() {
  try {
    const response: AxiosResponse = yield call(TodoAPI.completeAllTodos);

    yield put(completeAllTodosSuccess(response.data.todos));
  } catch (error) {
    yield put(completeAllTodosError(error));
  }
}

function* removeTodoByIdWorker({ payload }: RemoveTodoActionRequest) {
  try {
    const { id } = payload!;
    const response: AxiosResponse = yield call(TodoAPI.removeTodoById, id);

    yield put(removeTodoByIdSuccess(response.data.todo.id));
  } catch (error) {
    yield put(removeTodoByIdError(error));
  }
}

function* clearCompletedTodosWorker() {
  try {
    const response: AxiosResponse = yield call(TodoAPI.clearCompletedTodos);

    console.log(response);
    yield put(clearCompletedTodosSuccess(response.data.todos));
  } catch (error) {
    yield put(clearCompletedTodosError(error));
  }
}
