import { ratingTypes } from '../ActionTypes/RatingTypes'

import { UpdateRating, UpdateRatingFailure, UpdateRatingFailurePayload, UpdateRatingSuccess, UpdateRatingSuccessPayload } from '../types/types'


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