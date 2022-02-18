import { IfetchRatingObject } from '../../components/UI/molecules/RatingComponent/RatingComponent';
import { ratingTypes } from '../ActionTypes/RatingTypes'

import { UpdateRating, 
  UpdateRatingFailure, 
  UpdateRatingFailurePayload, 
  UpdateRatingSuccess, 
  UpdateRatingSuccessPayload,
   FetchRating, 
   FetchRatingFailure, 
   FetchRatingFailurePayload, 
   FetchRatingSuccess, 
   FetchRatingSuccessPayload 
  } from '../types/types'

export const updateRating = (payload: object): UpdateRating => ({ 
    type: ratingTypes.UPDATE_RATING,
    payload
  });
export const updateRatingSuccess = (payload: UpdateRatingSuccessPayload): UpdateRatingSuccess => ({ 
    type: ratingTypes.UPDATE_RATING_SUCCESS,
    payload
  });
export const updateRatingFailure = (payload: UpdateRatingFailurePayload): UpdateRatingFailure => ({ 
    type: ratingTypes.UPDATE_RATING_FAILURE,
    payload
  });

export const fetchRating = (payload: IfetchRatingObject): FetchRating => ({ 
    type: ratingTypes.FETCH_RATING,
    payload
  });
export const fetchRatingSuccess = (payload: FetchRatingSuccessPayload): FetchRatingSuccess => ({ 
    type: ratingTypes.FETCH_RATING_SUCCESS,
    payload
  });
export const fetchRatingFailure = (payload: FetchRatingFailurePayload): FetchRatingFailure => ({ 
    type: ratingTypes.FETCH_RATING_FAILURE,
    payload
  });