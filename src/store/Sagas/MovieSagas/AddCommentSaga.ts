import { put, call, takeEvery, all } from 'redux-saga/effects';
import { addCommentFailure, addCommentSuccess } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'


function* workAddComment(action:any): any {
    try {
        console.log('add comment action.payload');
        
        console.log(action.payload);
        
    const response = yield call(movieService.addComment, action.payload);

    console.log('response')
    console.log(response.data)


    yield put(
        addCommentSuccess({
          movie_comment : response.data
        })
      )
      success('Comment added successfully')
    }
    
    catch (e: any) {
      notify("An error occured")
      yield put(
        addCommentFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* AddCommentSaga() {
    yield all([takeEvery(movieTypes.ADD_COMMENT, workAddComment)])
}


export default AddCommentSaga; 