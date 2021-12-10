import { all, fork } from "redux-saga/effects";
import moviesSaga from "./MovieSagas.ts/MoviesSagas";
import movieSaga from "./MovieSagas.ts/MovieByIdSaga";
import CreateMovieSaga from "./MovieSagas.ts/CreateMovieSaga";
import MoviesByTitleSaga from "./MovieSagas.ts/MoviesByTitleSaga";

export default function* rootSaga() {
  yield all([fork(moviesSaga), fork(movieSaga), fork(CreateMovieSaga), fork(MoviesByTitleSaga)]);
}
