import { movieTypes} from '../../ActionTypes/Movietypes'
import { MoviesActions, MovieState } from '../../types/types';

const initialState: MovieState = {
    pending: false,
    movie: {},
    error: null
  };


const movieByIdReducer = (state = initialState, action: MoviesActions) => {
    switch (action.type) {

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

export default movieByIdReducer
