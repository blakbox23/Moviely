import { movieTypes} from '../../ActionTypes/Movietypes'
import { MoviesActions, MoviesState } from '../../types/types';

const initialState: MoviesState = {
    pending: false,
    error: null,
    movies: [],
    movie: undefined,
  };


const moviesReducer = (state = initialState, action: MoviesActions) => {
    switch (action.type) {

        case movieTypes.FETCH_MOVIES:
        return {
            ...state,
            pending: true
        };

        case movieTypes.FETCH_MOVIES_SUCCESS: 
        return {
        ...state,
        pending: false,
        movies: action.payload.movies,
        error: null
      };

      case movieTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        pending: false,
        movies: [],
        error: action.payload.error
      };

      case movieTypes.FETCH_MOVIE_BY_ID:
        return {
            ...state,
            pending: true
        };

        case movieTypes.FETCH_MOVIE_BY_ID_SUCCESS: 
        return {
        ...state,
        pending: false,
        movie: action.payload.movie,
        error: null
      };

      case movieTypes.FETCH_MOVIE_BY_ID_FAILURE:
        return {
          ...state,
          pending: false,
          movies: [],
          error: action.payload.error
        };
            
      default:
            return {
                ...state
            };
    }
};

export default moviesReducer
