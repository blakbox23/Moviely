import { put, call, takeEvery, all } from 'redux-saga/effects';
import { fetchMovieByIdSuccess, fetchMovieByIdFailure } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'

function* workFetchMovie(action:any): any {

    try {
       const response = yield call(movieService.getMoviebyid, action.payload); 
    yield put(
      fetchMovieByIdSuccess({
          movie: response.data
        })
      );

    } catch (e: any) {
      yield put(
        fetchMovieByIdFailure({
          error: e.message
        })
      ); 
    }
  }

function* movieSaga() {
    yield all([takeEvery(movieTypes.FETCH_MOVIE_BY_ID, workFetchMovie)])
}

export default movieSaga;


