import { put, call, takeEvery, all } from 'redux-saga/effects';
import { editMovieFailure, editMovieSuccess } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'


function* workEditMovie(action:any): any {
    try {
    const response = yield call(movieService.editMovie, action.payload);

    yield put(
        editMovieSuccess({
          movie: response.data
        })
      )
      success('Movie edited successfully')
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        editMovieFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* EditMovieSaga() {
    yield all([takeEvery(movieTypes.EDIT_MOVIE, workEditMovie)])
}



export default EditMovieSaga; 