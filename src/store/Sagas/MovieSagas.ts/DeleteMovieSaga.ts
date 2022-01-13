import { put, call, takeEvery, all } from 'redux-saga/effects';
import { deleteMovieSuccess, deleteMovieFailure } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'


function* workDeleteMovie(action:any): any {
    try {
      const response = yield call(movieService.removeMovie, action.payload);
    yield put(
        deleteMovieSuccess(action.payload)
      )
      success('Movie deleted successfully')
      console.log('action.payload')
      console.log(action.payload)
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        deleteMovieFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* DeleteMovieSaga() {
    yield all([takeEvery(movieTypes.DELETE_MOVIE, workDeleteMovie)])
}



export default DeleteMovieSaga;