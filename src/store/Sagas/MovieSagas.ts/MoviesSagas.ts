import axios from 'axios';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { IMovie } from '../../types/types'
import { fetchmoviesFailure, fetchmoviesSuccess } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'


function* workFetchMovies(): any {
    try {
       const response = yield call(movieService.getMovies);
    yield put(
        fetchmoviesSuccess({
          movies: response.data
        })
      );
      console.log(response.data)
    } catch (e: any) {
      yield put(
        fetchmoviesFailure({
          error: e.message
        })
      ); 
    }
  }

function* moviesSaga() {
    yield all([takeLatest(movieTypes.FETCH_MOVIES, workFetchMovies)])
}



export default moviesSaga;