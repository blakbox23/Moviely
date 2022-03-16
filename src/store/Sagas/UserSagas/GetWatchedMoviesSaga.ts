import { put, call, takeLatest, all } from 'redux-saga/effects';
import { userTypes } from '../../ActionTypes/Usertypes';
import { getWatchedMoviesFailure, getWatchedMoviesSuccess } from '../../Actions/UserActions';
import { userService } from '../../../services/UserServices';


function* workGetWatchedMovies(action: any): any {
    try {
       const response = yield call(userService.fetchWatchedMovies, action.payload);
    yield put(
        getWatchedMoviesSuccess({
          watchedMovies: response.data
        })
      );
    } catch (e: any) {
      yield put(
        getWatchedMoviesFailure({
          error: e.message
        })
      ); 
    }
  }

function* getWatchedMoviesSaga() {
    yield all([takeLatest(userTypes.GET_WATCHED_MOVIES, workGetWatchedMovies)])
}



export default getWatchedMoviesSaga;