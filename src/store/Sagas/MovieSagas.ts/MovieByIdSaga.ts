import axios from 'axios';
import { put, call, takeEvery, all } from 'redux-saga/effects';
import { IMovie } from '../../types/types'
import { fetchMovieByIdSuccess, fetchMovieByIdFailure } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'


function* workFetchMovie(): any {
    try {
       const response = yield call(movieService.getMoviebyid);
    yield put(
      fetchMovieByIdSuccess({
          movie: response.data
        })
      );
      console.log(response.data)
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