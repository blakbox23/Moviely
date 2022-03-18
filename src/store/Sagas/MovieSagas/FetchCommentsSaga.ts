import { put, call, takeLatest, all } from 'redux-saga/effects';
import { fetchcommentsFailure, fetchcommentsSuccess } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'


function* workFetchComments(action: any): any {
    try {
       const response = yield call(movieService.getComments, action.payload);
    yield put(
        fetchcommentsSuccess({
          movie_comments: response.data
        })
      );
    } catch (e: any) {
      yield put(
        fetchcommentsFailure({
          error: e.message
        })
      ); 
    }
  }

function* commentsSaga() {
    yield all([takeLatest(movieTypes.FETCH_COMMENTS, workFetchComments)])
}



export default commentsSaga;