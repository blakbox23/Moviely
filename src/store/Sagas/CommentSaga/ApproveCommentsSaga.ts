import { put, call, takeEvery, all } from 'redux-saga/effects';
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { approveCommentsFailure, approveCommentsSuccess } from '../../Actions/CommentsActions';
import { commentsTypes } from '../../ActionTypes/Commentstypes';
import { commentsService } from '../../../services/CommentsServices';


function* workApproveComment(action:any): any {
    try {
    const response = yield call(commentsService.approveComments, action.payload);

    const movieId = response.data.movieId

    const commentsCount = yield call(commentsService.getCommentsCount, response.data.movieId);

    yield call(commentsService.addCommentsCount, {id: movieId, commentscount: commentsCount.data.commentscount+1});

    yield put(
        approveCommentsSuccess({
          comment: response.data
        })
      )
      success('Comment Approved')
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        approveCommentsFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* ApproveCommentsSaga() {
    yield all([takeEvery(commentsTypes.APPROVE_COMMENTS, workApproveComment)])
}



export default ApproveCommentsSaga; 