import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchFilteredMoviesFailure, fetchFilteredMoviesSuccess } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'


function* workFilteredMovies(action: any): any {
    try {
       const response = yield call(movieService.searchedMovies, action.payload);
       console.log('response')
       console.log(response.data)
    yield put(
      fetchFilteredMoviesSuccess({
        searchedMovies: response.data
        })
      );
    } catch (e: any) {
      yield put(
        fetchFilteredMoviesFailure({
          error: e.message
        })
      ); 
    }
  }

function* FilteredMoviesSaga() {
    yield all([takeLatest(movieTypes.FETCH_FILTERED_MOVIES, workFilteredMovies)])
}



export default FilteredMoviesSaga;