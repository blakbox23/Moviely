import { put, call, takeEvery, all } from 'redux-saga/effects';
import { commentsTypes } from '../../ActionTypes/Commentstypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { deleteCommentFailure, deleteCommentSuccess } from '../../Actions/CommentsActions';
import { commentsService } from '../../../services/CommentsServices';


function* workDeleteComment(action:any): any {
    try {
      const response = yield call(commentsService.deleteComment, action.payload);
    yield put(
        deleteCommentSuccess(action.payload)
      )
      success('Comment deleted successfully')
      console.log('action.payload')
      console.log(action.payload)
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        deleteCommentFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* DeleteCommentSaga() {
    yield all([takeEvery(commentsTypes.DELETE_COMMENT, workDeleteComment)])
}



export default DeleteCommentSaga;