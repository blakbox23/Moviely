import { all, fork } from "redux-saga/effects";
import moviesSaga from "./MovieSagas.ts/MoviesSagas";

export default function* rootSaga() {
  yield all([fork(moviesSaga)]);
}
