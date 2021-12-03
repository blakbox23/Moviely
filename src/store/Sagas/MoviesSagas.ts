import axios from 'axios';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { IMovie } from '../types/types'
import { fetchmoviesFailure, fetchmoviesSuccess } from '../Actions/MoviesAction'

import { movieTypes } from '../ActionTypes/Movietypes'

const getMovies = () => axios.get<IMovie[]>("http://localhost:8000/movies");


function* workFetchMovies(): any {
    try {
       const response = yield call(getMovies);
    yield put(
        fetchmoviesSuccess({
          movies: response.data
        })
      );
      console.log(response.data)
    } catch (e) {
      yield put(
        fetchmoviesFailure({
          error: "error"
        })
      );
    }
  }

function* moviesSaga() {
    yield all([takeLatest(movieTypes.FETCH_MOVIES, workFetchMovies)])
}


export default moviesSaga;