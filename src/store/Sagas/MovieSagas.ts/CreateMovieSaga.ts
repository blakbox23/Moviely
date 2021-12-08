import axios from 'axios';
import { put, call, takeEvery, all } from 'redux-saga/effects';
import { IMovie } from '../../types/types'
import { createMovieSuccess, createMovieFailure } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'


function* workCreateMovie(): any {
    try {
       const response = yield call(movieService.getMoviebyid);
    yield put(
        createMovieSuccess({
          movie: response.data
        })
      );
      console.log(response.data)
    } catch (e: any) {
      yield put(
        createMovieFailure({
          error: e.message
        })
      ); 
    }
  }

function* CreateMovieSaga() {
    yield all([takeEvery(movieTypes.CREATE_MOVIE, workCreateMovie)])
}



export default CreateMovieSaga;