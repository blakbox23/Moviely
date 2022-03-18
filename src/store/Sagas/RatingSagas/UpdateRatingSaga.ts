import { put, call, takeEvery, all } from 'redux-saga/effects';
import { updateRatingSuccess, updateRatingFailure} from '../../Actions/RatingsActions'
import { ratingService } from '../../../services/RatingServices'
import { ratingTypes } from '../../ActionTypes/RatingTypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { Irating } from '../../types/types';

function* workUpdateRating(action:any): any {
    try {
      const checkingresponse = yield call(ratingService.getMovieRating, action.payload[0].movieId);
      let checkingId
      checkingresponse.data.find( (rating: any) => rating.email === action.payload[0].email) ? (checkingId = checkingresponse.data.find( (rating: any) => rating.email === action.payload[0].email).id):(checkingId = null)

      if(checkingId === null){
        const ratingPostResponse = yield call(ratingService.updatePostRating, action.payload[0]);
        
        yield put(
          updateRatingSuccess({
            currentGrade: ratingPostResponse.data.grade
            })
          )
          success('Rating updated successfully!')
        } else {
          const ratingPatchResponse = yield call(ratingService.updatePatchRating, {ratingId: checkingId, grade: action.payload[0].grade, movieId: action.payload[0].movieId});

             yield put(
              updateRatingSuccess({ 
              currentGrade: ratingPatchResponse.data.grade
            })
          ); 
          success('Rating updated successfully!')
        }
    }
    catch (e: any) {

      notify("An error occured")
      yield put(
        updateRatingFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* UpdateRatingSaga() {
    yield all([takeEvery(ratingTypes.UPDATE_RATING, workUpdateRating)])
}

export default UpdateRatingSaga;

