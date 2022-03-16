import { put, call, takeEvery, all } from 'redux-saga/effects';
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { userTypes } from '../../ActionTypes/Usertypes';
import { addWatchedMovieFailure, addWatchedMovieSuccess } from '../../Actions/UserActions';
import { userService } from '../../../services/UserServices';


function* workAddWatchedMovie(action:any): any {
    try {
        // console.log('add comment action.payload');               
    const response = yield call(userService.addWatchedMovie, action.payload);

    yield put(
        addWatchedMovieSuccess({
          watchedMovie : response.data
        })
      )
      success('Movie added to watched list')
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        addWatchedMovieFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* AddWatchedMovieSaga() {
    yield all([takeEvery(userTypes.ADD_WATCHED_MOVIE, workAddWatchedMovie)])
}


export default AddWatchedMovieSaga; 