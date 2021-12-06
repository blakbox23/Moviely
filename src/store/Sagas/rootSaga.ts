import { all, fork } from "redux-saga/effects";
import moviesSaga from "./MovieSagas.ts/MoviesSagas";
import movieSaga from "./MovieSagas.ts/MovieByIdSaga";

export default function* rootSaga() {
  yield all([fork(moviesSaga), fork(movieSaga)]);
}
