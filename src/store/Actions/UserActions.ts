import { userTypes } from '../ActionTypes/Usertypes'
import { 
  Logintype, 
  LoginSuccessType, 
  LoginFailureType, 
  LoginFailurePayload, 
  LoginSuccessPayload, 
  isLoggedInType,
  logOutType,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserFailure,
  DeleteUserFailurePayload,
  IUser,
  UpdateUser,
  UpdateUserSuccess,
  UpdateUserFailurePayload,
  UpdateUserFailure,
  UpdateUserSuccessPayload,
  updateUserObject,
  CreateUser,
  CreateUserSuccess,
  CreateUserFailure,
  CreateUserSuccessPayload,
  CreateUserFailurePayload,
  GetWatchedMovies,
  GetWatchedMoviesSuccessPayload,
  GetWatchedMoviesSuccess,
  GetWatchedMoviesFailurePayload,
  GetWatchedMoviesFailure,
  AddWatchedMovie,
  AddWatchedMovieSuccessPayload,
  AddWatchedMovieSuccess,
  AddWatchedMovieFailurePayload,
  AddWatchedMovieFailure,
  DeleteWatchedMovie,
  DeleteWatchedMovieSuccessPayload,
  DeleteWatchedMovieSuccess,
  DeleteWatchedMovieFailurePayload,
  DeleteWatchedMovieFailure,
} from "../types/types";

console.log('localStorage.getItem(user)');




// localStorage.getItem('user') ? console.log(JSON.parse(`${localStorage.getItem('user')}`).user) : console.log('null')



  export const Login = (payload: object): Logintype => ({
      type: userTypes.LOGIN,
      payload
    })
 
  export const LoginSuccess = (payload: LoginSuccessPayload): LoginSuccessType => ({
    type: userTypes.LOGIN_SUCCESS,
    payload
  });
  export const LoginFailure = (payload: LoginFailurePayload): LoginFailureType => ({
    type: userTypes.LOGIN_FAILURE,
    payload
  }); 

  export const isLoggedIn = (): isLoggedInType => ({
      type: userTypes.LOGGED_IN,
      payload: localStorage.getItem('user') ? JSON.parse(`${localStorage.getItem('user')}`).user : null,
  });

  export const logOut = (): logOutType => ({
      type: userTypes.LOG_OUT,
      payload: null,
  });

  export const deleteUser = (payload: string): DeleteUser=> ({
  type: userTypes.DELETE_USER,
  payload
})
export const deleteUserSuccess = (payload: string): DeleteUserSuccess => ({
  type: userTypes.DELETE_USER_SUCCESS,
  payload
})
export const deleteUserFailure = (payload: DeleteUserFailurePayload): DeleteUserFailure => ({
  type: userTypes.DELETE_USER_FAILURE,
  payload
})

export const updateUser = (payload: any): UpdateUser => ({
  type: userTypes.UPDATE_USER,
  payload
})

export const updateUserSuccess = (payload: UpdateUserSuccessPayload): UpdateUserSuccess => ({
  type: userTypes.UPDATE_USER_SUCCESS,
  payload
})

export const updateUserFailure = (payload: UpdateUserFailurePayload): UpdateUserFailure => ({
  type: userTypes.UPDATE_USER_FAILURE,
  payload
})

export const createUser = (payload: any): CreateUser => ({
  type: userTypes.CREATE_USER,
  payload
})

export const createUserSuccess = (payload: CreateUserSuccessPayload): CreateUserSuccess => ({
  type: userTypes.CREATE_USER_SUCCESS,
  payload
})

export const createUserFailure = (payload: CreateUserFailurePayload): CreateUserFailure => ({
  type: userTypes.CREATE_USER_FAILURE,
  payload
})


export const getWatchedMovies = (payload: string): GetWatchedMovies => ({
  type: userTypes.GET_WATCHED_MOVIES,
  payload
})

export const getWatchedMoviesSuccess = (payload: GetWatchedMoviesSuccessPayload): GetWatchedMoviesSuccess => ({
  type: userTypes.GET_WATCHED_MOVIES_SUCCESS,
  payload
})

export const getWatchedMoviesFailure = (payload: GetWatchedMoviesFailurePayload): GetWatchedMoviesFailure => ({
  type: userTypes.GET_WATCHED_MOVIES_FAILURE,
  payload
})


export const addWatchedMovie = (payload: object): AddWatchedMovie => ({
  type: userTypes.ADD_WATCHED_MOVIE,
  payload
})

export const addWatchedMovieSuccess = (payload: AddWatchedMovieSuccessPayload): AddWatchedMovieSuccess => ({
  type: userTypes.ADD_WATCHED_MOVIE_SUCCESS,
  payload
})

export const addWatchedMovieFailure = (payload: AddWatchedMovieFailurePayload): AddWatchedMovieFailure => ({
  type: userTypes.ADD_WATCHED_MOVIE_FAILURE,
  payload
})


export const deleteWatchedMovie = (payload: string): DeleteWatchedMovie => ({
  type: userTypes.DELETE_WATCHED_MOVIE,
  payload
})
export const deleteWatchedMovieSuccess = (payload: DeleteWatchedMovieSuccessPayload): DeleteWatchedMovieSuccess => ({
  type: userTypes.DELETE_WATCHED_MOVIE_SUCCESS,
  payload
})

export const deleteWatchedMovieFailure = (payload: DeleteWatchedMovieFailurePayload): DeleteWatchedMovieFailure => ({
  type: userTypes.DELETE_WATCHED_MOVIE_FAILURE,
  payload
})