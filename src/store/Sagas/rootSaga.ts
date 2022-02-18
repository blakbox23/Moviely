import { all, fork } from "redux-saga/effects";
import moviesSaga from "./MovieSagas/MoviesSagas";
import movieSaga from "./MovieSagas/MovieByIdSaga";
import CreateMovieSaga from "./MovieSagas/CreateMovieSaga";
import FilteredMoviesSaga from "./MovieSagas/FilteredMoviesSaga";
import UpdateRatingSaga from './RatingSagas/UpdateRatingSaga'
import FetchRatingSaga from "./RatingSagas/FetchRatingSaga";
import DeleteMovieSaga from "./MovieSagas/DeleteMovieSaga";

export default function* rootSaga() {
  yield all([fork(moviesSaga), fork(movieSaga), fork(CreateMovieSaga), fork(FilteredMoviesSaga), fork(UpdateRatingSaga), fork(FetchRatingSaga), fork(DeleteMovieSaga)]);
}
