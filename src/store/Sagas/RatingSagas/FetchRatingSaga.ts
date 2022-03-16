import { put, call, takeEvery, all } from 'redux-saga/effects';
import { fetchRatingSuccess, fetchRatingFailure} from '../../Actions/RatingsActions'
import { ratingService } from '../../../services/RatingServices'
import { ratingTypes } from '../../ActionTypes/RatingTypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { Irating } from '../../types/types';

function* workFetchRating(action:any): any {
    try {
      const response = yield call(ratingService.getMovieRating, action.payload.movieId);
     
      let userRating
      // let userRating = response.data.find( (rating: Irating) => rating.email === action.payload.email);
      response.data.find( (rating: Irating) => rating.email === action.payload.email) ? (userRating = response.data.find( (rating: Irating) => rating.email === action.payload.email).grade):(userRating = 0)
      
      console.log('fetchrating from saga')
      console.log(userRating)

    yield put(
        fetchRatingSuccess({
          currentGrade: userRating
        })
      )
    }
    catch (e: any) {

      notify("An error occured")
      yield put(
        fetchRatingFailure({ 
          error: e.message
        })
      ); 
    }
  }


function* FetchRatingSaga() {
    yield all([takeEvery(ratingTypes.FETCH_RATING, workFetchRating)])
}

export default FetchRatingSaga;