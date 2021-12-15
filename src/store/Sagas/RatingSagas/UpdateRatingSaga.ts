import { put, call, takeEvery, all } from 'redux-saga/effects';
import { updateRatingSuccess, updateRatingFailure} from '../../Actions/RatingsActions'
import { ratingService } from '../../../services/RatingServices'
import { ratingTypes } from '../../ActionTypes/RatingTypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'

function* workUpdateRating(action:any): any {
    try {
      const response = yield call(ratingService.editMovieRating, action.payload);

      console.log('Rating response')
      console.log(response.data)

    yield put(
        updateRatingSuccess({
          movieRating: response.data
        })
      )
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