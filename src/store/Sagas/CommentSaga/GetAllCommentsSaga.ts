import { put, call, takeLatest, all } from 'redux-saga/effects';
import { commentsService } from '../../../services/CommentsServices'
import { movieTypes } from '../../ActionTypes/Movietypes'
import { getAllCommentsFailure, getAllCommentsSuccess } from '../../Actions/CommentsActions';
import { Icomment } from '../../types/types';


function* workGetAllComments(): any {
    try {
       const response = yield call(commentsService.getComments);
       const pendingcomm = response.data.filter((x: Icomment)=> x.approved === false)
    yield put(
        getAllCommentsSuccess({
          comments: pendingcomm
        })
      );
    } catch (e: any) {
      yield put(
        getAllCommentsFailure({
          error: e.message
        })
      ); 
    }
  }

function* AllCommentsSaga() {
    yield all([takeLatest(movieTypes.FETCH_MOVIES, workGetAllComments)])
}



export default AllCommentsSaga;