import { all, fork } from "redux-saga/effects";
import moviesSaga from "./MoviesSagas";

export default function* rootSaga() {
  yield all([fork(moviesSaga)]);
}
