import { all, fork } from "redux-saga/effects";
import moviesSaga from "./MovieSagas.ts/MoviesSagas";
import movieSaga from "./MovieSagas.ts/MovieByIdSaga";
import CreateMovieSaga from "./MovieSagas.ts/CreateMovieSaga";
import FilteredMoviesSaga from "./MovieSagas.ts/FilteredMoviesSaga";
import UpdateRatingSaga from './RatingSagas/UpdateRatingSaga'

export default function* rootSaga() {
  yield all([fork(moviesSaga), fork(movieSaga), fork(CreateMovieSaga), fork(FilteredMoviesSaga), fork(UpdateRatingSaga)]);
}
