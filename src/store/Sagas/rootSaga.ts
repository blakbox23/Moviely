import { all, fork } from "redux-saga/effects";
import moviesSaga from "./MovieSagas/MoviesSagas";
import movieSaga from "./MovieSagas/MovieByIdSaga";
import CreateMovieSaga from "./MovieSagas/CreateMovieSaga";
import FilteredMoviesSaga from "./MovieSagas/FilteredMoviesSaga";

export default function* rootSaga() {
  yield all([fork(moviesSaga), fork(movieSaga), fork(CreateMovieSaga), fork(FilteredMoviesSaga)])
}
