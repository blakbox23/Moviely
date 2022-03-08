import { IfetchRatingObject } from "../../components/UI/molecules/RatingComponent/RatingComponent";
import { movieTypes } from "../ActionTypes/Movietypes";
import { ratingTypes } from "../ActionTypes/RatingTypes";
import { userTypes } from "../ActionTypes/Usertypes";

export interface IMovie {
    id: string;
    title: string;
    genre: string;
    year: number;
    runtime: number;
    imageUrl: string;
    country: string;
    description: string;
    comments: Icomment[];
    ratings: Irating[] | undefined;
    movieTrailer: string;
  } 

  export interface Irating {
    id: string;
    email: string;
    movieId: string;
    grade: number;
  }
  export interface Icomment { 
    id: string;
    email: string;
    content: string;
    approved: boolean;
  }

  export interface IfilteredMovie { 
    title?: string;
    genre?: string;
    year?: string;
    grade?: number;
  }
  export interface Iratingobject { 
    email: string;
    movieId: string;
    grade?: number;
  }
  
export interface MoviesState {
  pending: boolean;
  error: string | null;
  movies: IMovie[];
  movie: IMovie | undefined;
  searchedMovies: IMovie[];
  searched: boolean,
  movie_id: string | null,
  movie_comment: string | null, 
}

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  sex: string;
  approved: string;
  watchedMovies: [];
  password: string;
 
} 

export interface UserState {
  pending: boolean;
  error: string | null;
  user: IUser | null;
}

export interface IcommentObject {
  email: string | undefined;
  content: string;
  movieId: string;
  approved: boolean;
}

export interface RatingsState {
  pending: boolean;
  error: string | null;
  movieRating: number | null,
  currentGrade: number | null,

}


export interface FetchmoviesSuccessPayload {
  movies: IMovie[]; 
}
export interface FetchmoviesFailurePayload {
  error: string;
}

export interface FetchFilteredMoviesSuccessPayload {
  searchedMovies: IMovie[]; 
}
export interface FetchFilteredMoviesFailurePayload {
  error: string;
}

export interface FetchMovieByIDSuccessPayload {
  movie: IMovie;
}
export interface FetchMovieByIDFailurePayload {
  error: string;
}

export interface CreateMovieSuccessPayload {
  movie: IMovie;
}
export interface CreateMovieFailurePayload {
  error: string;
}
export interface UpdateRatingFailurePayload {
  error: string;
}
export interface UpdateRatingSuccessPayload {
  movieRating: Irating;
}
export interface FetchRatingFailurePayload {
  error: string;
}
export interface FetchRatingSuccessPayload {
  currentGrade: number;
}
export interface DeleteMovieSuccessPayload {
  movie_id: string;
}
export interface DeleteMovieFailurePayload {
  error: string;
}
export interface LoginSuccessPayload {
  user: IUser;
}
export interface LoginFailurePayload {
  error: string;
}
export interface isLoggedInTypePayload {
  user : IUser | null;
}
export interface EditMovieSuccessPayload {
  movie: IMovie;
}
export interface EditMovieFailurePayload {
  error: string;
}
export interface AddCommentFailurePayload {
  error: string;
}
export interface AddCommentSuccessPayload {
  movie_comment: Icomment;
}


export interface Fetchmovies {
  type: typeof movieTypes.FETCH_MOVIES;
}
export interface FetchFilteredMovies {
  type: typeof movieTypes.FETCH_FILTERED_MOVIES;
  payload: object;
}

export interface FetchMovieByID {
  type: typeof movieTypes.FETCH_MOVIE_BY_ID;
  payload: string
}
export interface CreateMovie {
  type: typeof movieTypes.CREATE_MOVIE;
  payload: object
}
export interface EditMovie {
  type: typeof movieTypes.EDIT_MOVIE;
  payload: object
}
export interface UpdateRating {
  type: typeof ratingTypes.UPDATE_RATING;
  payload: object
}
export interface FetchRating {
  type: typeof ratingTypes.FETCH_RATING;
  payload: IfetchRatingObject
}
export interface DeleteMovie {
  type: typeof movieTypes.DELETE_MOVIE;
  payload: string
}
export interface Logintype {
  type: typeof userTypes.LOGIN;
  payload: object
}
export interface isLoggedInType {
  type: typeof userTypes.LOGGED_IN;
  payload: IUser | null
}
export interface logOutType {
  type: typeof userTypes.LOG_OUT;
  payload: null
}
export interface AddComment {
  type: typeof movieTypes.ADD_COMMENT;
  payload: IcommentObject
}



export type FetchmoviesSuccess = {
  type: typeof movieTypes.FETCH_MOVIES_SUCCESS;
  payload: FetchmoviesSuccessPayload;
};
export type FetchmoviesFailure = {
  type: typeof movieTypes.FETCH_MOVIES_FAILURE;
  payload: FetchmoviesFailurePayload;
};

export type FetchFilteredMoviesSuccess = {
  type: typeof movieTypes.FETCH_FILTERED_MOVIES_SUCCESS;
  payload: FetchFilteredMoviesSuccessPayload;
};
export interface FetchFilteredMoviesFailure {
  type: typeof movieTypes.FETCH_FILTERED_MOVIES_FAILURE;
  payload: FetchFilteredMoviesFailurePayload
}

export interface FetchMovieByIDSuccess {
  type: typeof movieTypes.FETCH_MOVIE_BY_ID_SUCCESS;
  payload: FetchMovieByIDSuccessPayload
}
export interface FetchMovieByIDFailure {
  type: typeof movieTypes.FETCH_MOVIE_BY_ID_FAILURE;
  payload: FetchMovieByIDFailurePayload
}

export interface CreateMovieSuccess {
  type: typeof movieTypes.CREATE_MOVIE_SUCCESS;
  payload: CreateMovieSuccessPayload
}
export interface CreateMovieFailure {
  type: typeof movieTypes.CREATE_MOVIE_FAILURE;
  payload: CreateMovieFailurePayload
}
export interface LoginSuccessType {
  type: typeof userTypes.LOGIN_SUCCESS;
  payload: LoginSuccessPayload
}
export interface LoginFailureType {
  type: typeof userTypes.LOGIN_FAILURE;
  payload: LoginFailurePayload
}

export interface UpdateRatingSuccess {
  type: typeof ratingTypes.UPDATE_RATING_SUCCESS;
  payload: UpdateRatingSuccessPayload
}

export interface UpdateRatingFailure {
  type: typeof ratingTypes.UPDATE_RATING_FAILURE;
  payload: FetchmoviesFailurePayload
}

export interface FetchRatingSuccess {
  type: typeof ratingTypes.FETCH_RATING_SUCCESS;
  payload: FetchRatingSuccessPayload
}

export interface FetchRatingFailure {
  type: typeof ratingTypes.FETCH_RATING_FAILURE;
  payload: FetchRatingFailurePayload
}

export interface DeleteMovieSuccess {
  type: typeof movieTypes.DELETE_MOVIE_SUCCESS;
  payload: DeleteMovieSuccessPayload
}
export interface DeleteMovieFailure {
  type: typeof movieTypes.DELETE_MOVIE_FAILURE;
  payload: DeleteMovieFailurePayload
}
export interface EditMovieSuccess {
  type: typeof movieTypes.EDIT_MOVIE_SUCCESS;
  payload: EditMovieSuccessPayload
}
export interface EditMovieFailure {
  type: typeof movieTypes.EDIT_MOVIE_FAILURE;
  payload: CreateMovieFailurePayload
}
export interface AddCommentSuccess {
  type: typeof movieTypes.ADD_COMMENT_SUCCESS;
  payload: AddCommentSuccessPayload;
}
export interface AddCommentFailure {
  type: typeof movieTypes.ADD_COMMENT_FAILURE;
  payload: AddCommentFailurePayload
}



export type MoviesActions =
  | Fetchmovies
  | FetchmoviesSuccess
  | FetchmoviesFailure
  | FetchMovieByID
  | FetchMovieByIDSuccess
  | FetchMovieByIDFailure
  | CreateMovie
  | CreateMovieSuccess
  | CreateMovieFailure
  | FetchFilteredMovies
  | FetchFilteredMoviesSuccess
  | FetchFilteredMoviesFailure
  | DeleteMovie
  | DeleteMovieSuccess
  | DeleteMovieFailure
  | EditMovie
  | EditMovieSuccess
  | EditMovieFailure
  | AddComment
  | AddCommentSuccess
  | AddCommentFailure


  export type RatingActions =
  | UpdateRating
  | UpdateRatingSuccess
  | UpdateRatingFailure
  | FetchRating
  | FetchRatingSuccess
  | FetchRatingFailure

  
  export type UserActions =
  | Logintype
  | LoginSuccessType
  | LoginFailureType
  | isLoggedInType
  | logOutType


