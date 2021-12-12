import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchmoviesFailure, fetchMoviesByTitleSuccess } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'


function* workMoviesByTitleSaga(action: any): any {
    try {
       const response = yield call(movieService.getMoviesByTitle, action.payload);
    yield put(
        fetchMoviesByTitleSuccess({
          moviesByTitle: response.data
        })
      );
    } catch (e: any) {
      yield put(
        fetchmoviesFailure({
          error: e.message
        })
      ); 
    }
  }

function* MoviesByTitleSaga() {
    yield all([takeLatest(movieTypes.FETCH_MOVIES_BY_TITLE, workMoviesByTitleSaga)])
}



export default MoviesByTitleSaga;