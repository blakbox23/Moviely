import { userTypes} from '../../ActionTypes/Usertypes';
import { UserActions, UserState } from '../../types/types';

const initialState: UserState = {
    pending: false,
    error: null,
    user: null,
    watchedMovies: [],
    watchedMovie: null
  };

const userReducer = (state = initialState, action: UserActions) => {
    switch (action.type) {
        
      case userTypes.LOGIN:
        return {
            ...state,
            pending: true,
        };       

        case userTypes.LOGIN_SUCCESS: 
        return {
        ...state,
        pending: false,
        user: action.payload.user,
        watchedMovies: action.payload.user.watchedMovies,
        error: null
      };

      case userTypes.LOGIN_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error
        };

        case userTypes.LOGGED_IN: 
        return {
        ...state,
        pending: false,
        user: action.payload,
        error: null
      };

        case userTypes.LOG_OUT: 
        return {
        ...state,
        pending: false,
        user: null,
        error: null
      };

      case userTypes.DELETE_USER:
        return {
            ...state,
            pending: true,
        };

        case userTypes.DELETE_USER_SUCCESS: 
        return {
        ...state,
        pending: false,
        user: null,
        error: null
      };

      case userTypes.DELETE_USER_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error
        };

        case userTypes.UPDATE_USER:
          return {
            ...state,
            pending: true,
            error: null
          }

          case userTypes.UPDATE_USER_SUCCESS: 
          return {
          ...state,
          pending: false,
          user: action.payload.user,
          error: null
        };

        case userTypes.UPDATE_USER_FAILURE:
          return {
            ...state,
            pending: false,
            error: action.payload.error
          };

          
        case userTypes.CREATE_USER:
          return {
            ...state,
            pending: true,
            error: null
          }

          case userTypes.CREATE_USER_SUCCESS: 
          return {
          ...state,
          pending: false,
          user: action.payload.user,
          error: null
        };

        case userTypes.CREATE_USER_FAILURE:
          return {
            ...state,
            pending: false,
            error: action.payload.error
          };
          
        case userTypes.GET_WATCHED_MOVIES:
          return {
            ...state,
            pending: true,
            error: null
          }

          case userTypes.GET_WATCHED_MOVIES_SUCCESS: 
          return {
          ...state,
          pending: false,
          watchedMovies: action.payload.watchedMovies,
          error: null
        };

        case userTypes.GET_WATCHED_MOVIES_FAILURE:
          return {
            ...state,
            pending: false,
            error: action.payload.error
          };

        case userTypes.ADD_WATCHED_MOVIE:
          return {
            ...state,
            pending: true,
            error: null
          }

          case userTypes.ADD_WATCHED_MOVIE_SUCCESS: 
          return {
          ...state,
          pending: false,
          watchedMovies: [...state.watchedMovies, action.payload.watchedMovie],
          error: null
        };

        case userTypes.ADD_WATCHED_MOVIE_FAILURE:
          return {
            ...state,
            pending: false,
            error: action.payload.error
          };


        case userTypes.DELETE_WATCHED_MOVIE:
          return {
            ...state,
            pending: true,
            error: null,
            watchedMovie: action.payload
          }

          case userTypes.DELETE_WATCHED_MOVIE_SUCCESS: 
          return {
          ...state,
          pending: false,
          watchedMovies: state.watchedMovies.filter((watchedMovie) => watchedMovie.id !== state.watchedMovie),
          error: null
        };

        case userTypes.DELETE_WATCHED_MOVIE_FAILURE:
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

export default userReducer
