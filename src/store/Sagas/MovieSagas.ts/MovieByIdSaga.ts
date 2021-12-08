import axios from 'axios';
import { put, call, takeEvery, all } from 'redux-saga/effects';
import { IMovie, FetchMovieByID } from '../../types/types'
import { fetchMovieByIdSuccess, fetchMovieById, fetchMovieByIdFailure } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'


function* workFetchMovie(action:any): any {
  console.log('payload')
  console.log(action.payload)
    try {
       const response = yield call(movieService.getMoviebyid("cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec"));
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
    yield all([takeEvery(movieTypes.FETCH_MOVIE_BY_ID, workFetchMovie(action))])
}



export default movieSaga;

function action(action: any): any {
  throw new Error('Function not implemented.');
}
