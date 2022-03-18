import { put, call, takeEvery, all } from 'redux-saga/effects';
import { fetchRatingSuccess, fetchRatingFailure} from '../../Actions/RatingsActions'
import { ratingService } from '../../../services/RatingServices'
import { ratingTypes } from '../../ActionTypes/RatingTypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'
import { Irating } from '../../types/types';

function* workFetchRating(action:any): any {
    try {
      const response = yield call(ratingService.getMovieRating, action.payload.movieId);
      let averageRating
      let gradesArray = response.data.map((rating: any)=> rating.grade)
      
      if(!gradesArray.length){
        averageRating = 0;
      }else{
         averageRating = gradesArray.reduce((a: number, b:number) => a + b) / gradesArray.length;
      }
      
      let averageMovieRating = parseFloat(averageRating.toFixed(1))
      yield call(ratingService.setMovieRating, {
        averagerating: averageMovieRating,
        movieId: action.payload.movieId
      });
     
      let userRating
      response.data.find( (rating: Irating) => rating.email === action.payload.email) ? (userRating = response.data.find( (rating: Irating) => rating.email === action.payload.email).grade):(userRating = 0)

    const getWatchedId = yield call(ratingService.getWatchedId, action.payload);
    
    let watchedMovieId
    getWatchedId.data.find( (watched: any) => watched.userId === action.payload.userId) ? (watchedMovieId = getWatchedId.data.find( (watched: any) => watched.userId === action.payload.userId).id):(watchedMovieId=null)

    if(watchedMovieId !== null){
      yield call(ratingService.setWatchedMovieRating, {id: watchedMovieId, averagerating: averageMovieRating});
    }

    yield put(
        fetchRatingSuccess({
          currentGrade: userRating,
          movieRating: averageMovieRating
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