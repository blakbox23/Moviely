import { ratingTypes} from '../../ActionTypes/RatingTypes'
import { RatingActions, RatingsState } from '../../types/types';


const initialState: RatingsState = {
    pending: false,
    error: null,
    movieRating: null,
  };


  const ratingsReducer = (state = initialState, action: RatingActions) => {
      switch (action.type) {
        case ratingTypes.UPDATE_RATING:
            return {
                ...state,
                pending: true
            };

        case ratingTypes.UPDATE_RATING_SUCCESS: 
          return {
            ...state,
            pending: false,
            movieRating: action.payload.movieRating,
            error: null
          };

        case ratingTypes.UPDATE_RATING_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error
        };

        default:
          return {
              ...state
          };
      }
  }

  export default ratingsReducer
