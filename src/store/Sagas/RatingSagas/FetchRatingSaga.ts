import { put, call, takeEvery, all } from 'redux-saga/effects';
import { fetchRatingSuccess, fetchRatingFailure} from '../../Actions/RatingsActions'
import { ratingService } from '../../../services/RatingServices'
import { ratingTypes } from '../../ActionTypes/RatingTypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { Irating } from '../../types/types';

function* workFetchRating(action:any): any {
    try {
      const response = yield call(ratingService.getMovieRating, action.payload.movieId);

      console.log('Rating response fetch')
      console.log(response.data)

      // let userRating = response.data.find( (rating: Irating) => rating.email === action.payload.email );
      
      // console.log('fetchrating from saga')
      // console.log(userRating.grade)

      success("Successful")

    yield put(
        fetchRatingSuccess({
          currentGrade: 2
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