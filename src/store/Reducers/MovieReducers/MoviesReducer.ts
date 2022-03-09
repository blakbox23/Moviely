import { movieTypes} from '../../ActionTypes/Movietypes'
import { MoviesActions, MoviesState } from '../../types/types';

const initialState: MoviesState = {
    pending: false,
    error: null,
    movies: [],
    movie: undefined,
    searchedMovies: [],
    searched: false,
    movie_id: null,
    movie_comment: null,
    movie_comments: [],
  };


const moviesReducer = (state = initialState, action: MoviesActions) => {
    switch (action.type) {

        case movieTypes.FETCH_MOVIES:
        return {
            ...state,
            movie: undefined,
            pending: true,
            searched: false,
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
        error: action.payload.error
      };

      case movieTypes.FETCH_FILTERED_MOVIES:
        return {
            ...state,
            searched: true,
            pending: true
        };

        case movieTypes.FETCH_FILTERED_MOVIES_SUCCESS: 
        return {
        ...state,
        pending: false,
        searchedMovies: action.payload.searchedMovies,
        error: null
      };

      case movieTypes.FETCH_FILTERED_MOVIES_FAILURE:
        return {
          ...state,
          pending: false,
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
          error: action.payload.error
        };

      case movieTypes.CREATE_MOVIE:
        return {
            ...state,
            pending: true
        };
        
        case movieTypes.CREATE_MOVIE_SUCCESS: 
        return {
        ...state,
        pending: false,
        movies: [...state.movies, action.payload.movie],
        error: null
      };

      case movieTypes.CREATE_MOVIE_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error
        };

        case movieTypes.EDIT_MOVIE:
        return {
            ...state,
            pending: true
        };
        
        case movieTypes.EDIT_MOVIE_SUCCESS: 
        const newMovies = state.movies.filter((movie) => movie.id !== action.payload.movie.id)
         console.log('newMovies')   
         console.log(newMovies) 
        return {
        ...state,
        pending: false,
        movies: [...newMovies, action.payload.movie],
        error: null
      };

      case movieTypes.EDIT_MOVIE_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error
        };

        case movieTypes.DELETE_MOVIE:
        return {
            ...state,
            pending: true,
            movie_id: action.payload
        };

        case movieTypes.DELETE_MOVIE_SUCCESS: 
        return {
        ...state,
        pending: false,
        movies: state.movies.filter((movie) => movie.id !== state.movie_id),
        error: null
      };

      case movieTypes.DELETE_MOVIE_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error
        };


        case movieTypes.ADD_COMMENT:
          
        return {
            ...state,
            pending: true,
           
        };

        case movieTypes.ADD_COMMENT_SUCCESS: 
        
        return {
        ...state,
        pending: false,
        movie_comments: [...state.movie_comments, action.payload.movie_comment],
        error: null
      };

      case movieTypes.ADD_COMMENT_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error
        };

        case movieTypes.FETCH_COMMENTS:          
        return {
            ...state,
            pending: true,          
        };

        case movieTypes.FETCH_COMMENTS_SUCCESS:         
        return {
        ...state,
        pending: false,
        movie_comments: action.payload.movie_comments,
        error: null
      };

      case movieTypes.FETCH_COMMENTS_FAILURE:
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
};

export default moviesReducer
