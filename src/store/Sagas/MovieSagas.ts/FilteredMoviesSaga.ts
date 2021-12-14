import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchFilteredMoviesFailure, fetchFilteredMoviesSuccess } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast';


function* workFilteredMovies(action: any): any {
    try {
       const response = yield call(movieService.searchedMovies, action.payload);

    yield put(
      fetchFilteredMoviesSuccess({
        searchedMovies: response.data
        })
      );
      if(response.data.length > 0){
        success(`${response.data.length} movie(s) found`)
      }else{
        notify('No movies found')

      }
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