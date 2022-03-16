import { put, call, takeEvery, all } from 'redux-saga/effects';
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { userTypes } from '../../ActionTypes/Usertypes';
import { deleteWatchedMovieFailure, deleteWatchedMovieSuccess } from '../../Actions/UserActions';
import { userService } from '../../../services/UserServices';


function* workDeleteWatchedMovie(action:any): any {
    try {
      const response = yield call(userService.deleteWatchedMovie, action.payload);
    yield put(
        deleteWatchedMovieSuccess(action.payload)
      )
      success('Successfully removed from watched list')
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        deleteWatchedMovieFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* DeleteWatchedMovieSaga() {
    yield all([takeEvery(userTypes.DELETE_WATCHED_MOVIE, workDeleteWatchedMovie)])
}



export default DeleteWatchedMovieSaga;