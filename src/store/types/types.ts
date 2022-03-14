import { IfetchRatingObject } from "../../components/UI/molecules/RatingComponent/RatingComponent";
import { commentsTypes } from "../ActionTypes/Commentstypes";
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
    movieId: string;
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
  movie_comment: Icomment | null, 
  movie_comments: Icomment[], 
}

export interface CommentsState {
  pending: boolean;
  error: string | null;
  comments: Icomment[];
  pendingComments: Icomment[];
  comment: Icomment | null;
  dltcomment: string | null
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
export interface updateUserObject {
  id: string;
  firstName: string;
  lastName: string;
  sex: string;
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

export interface GetAllCommentsSuccessPayload {
  comments: Icomment[]; 
}
export interface GetAllCommentsFailurePayload {
  error: string;
}
export interface FetchmoviesSuccessPayload {
  movies: IMovie[]; 
}
export interface FetchmoviesFailurePayload {
  error: string;
}
export interface FetchcommentsSuccessPayload {
  movie_comments: Icomment[]; 
}
export interface FetchcommentsFailurePayload {
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
export interface DeleteCommentSuccessPayload {
  dltcomment: string;
}
export interface DeleteMovieFailurePayload {
  error: string;
}
export interface DeleteCommentFailurePayload {
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
export interface ApproveCommentsFailurePayload {
  error: string;
}
export interface AddCommentSuccessPayload {
  movie_comment: Icomment;
}
export interface ApproveCommentsSuccessPayload {
  comment: Icomment;
}
export interface UpdateUserSuccessPayload {
  user: IUser;
}
export interface CreateUserSuccessPayload {
  user: IUser;
}
export interface FetchcommentsPayload {
  values: string;
} 
export interface DeleteUserFailurePayload {
  error: string
}
export interface UpdateUserFailurePayload {
  error: string
}
export interface CreateUserFailurePayload {
  error: string
}


export interface Fetchmovies {
  type: typeof movieTypes.FETCH_MOVIES;
}
export interface GetAllComments {
  type: typeof commentsTypes.GET_ALL_COMMENTS;
}
export interface Fetchcomments {
  type: typeof movieTypes.FETCH_COMMENTS;
  payload: string
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
export interface DeleteComment {
  type: typeof commentsTypes.DELETE_COMMENT;
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
export interface ApproveComments {
  type: typeof commentsTypes.APPROVE_COMMENTS;
  payload: string
}
export interface DeleteUser {
  type: typeof userTypes.DELETE_USER;
  payload: string
}
export interface UpdateUser {
  type: typeof userTypes.UPDATE_USER;
  payload: object
}
export interface CreateUser {
  type: typeof userTypes.CREATE_USER;
  payload: object
}


export type CreateUserSuccess = {
  type: typeof userTypes.CREATE_USER_SUCCESS;
  payload: CreateUserSuccessPayload;
};
export type CreateUserFailure = {
  type: typeof userTypes.CREATE_USER_FAILURE;
  payload: CreateUserFailurePayload;
};

export type GetAllCommentsSuccess = {
  type: typeof commentsTypes.GET_ALL_COMMENTS_SUCCESS;
  payload: GetAllCommentsSuccessPayload;
};
export type GetAllCommentsFailure = {
  type: typeof commentsTypes.GET_ALL_COMMENTS_FAILURE;
  payload: GetAllCommentsFailurePayload;
};

export type UpdateUserSuccess = {
  type: typeof userTypes.UPDATE_USER_SUCCESS;
  payload: UpdateUserSuccessPayload;
};
export type UpdateUserFailure = {
  type: typeof userTypes.UPDATE_USER_FAILURE;
  payload: UpdateUserFailurePayload;
};

export type FetchmoviesSuccess = {
  type: typeof movieTypes.FETCH_MOVIES_SUCCESS;
  payload: FetchmoviesSuccessPayload;
};
export type FetchmoviesFailure = {
  type: typeof movieTypes.FETCH_MOVIES_FAILURE;
  payload: FetchmoviesFailurePayload;
};
export type FetchcommentsSuccess = {
  type: typeof movieTypes.FETCH_COMMENTS_SUCCESS;
  payload: FetchcommentsSuccessPayload;
};
export type FetchcommentsFailure = {
  type: typeof movieTypes.FETCH_COMMENTS_FAILURE;
  payload: FetchcommentsFailurePayload;
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
export interface DeleteCommentSuccess {
  type: typeof commentsTypes.DELETE_COMMENT_SUCCESS;
  payload: DeleteCommentSuccessPayload
}
export interface DeleteUserFailure {
  type: typeof userTypes.DELETE_USER_FAILURE;
  payload: DeleteUserFailurePayload
}
export interface DeleteUserSuccess {
  type: typeof userTypes.DELETE_USER_SUCCESS;
  payload: string
}
export interface DeleteMovieFailure {
  type: typeof movieTypes.DELETE_MOVIE_FAILURE;
  payload: DeleteMovieFailurePayload
}
export interface DeleteCommentFailure {
  type: typeof commentsTypes.DELETE_COMMENT_FAILURE;
  payload: DeleteCommentFailurePayload
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
export interface ApproveCommentsSuccess {
  type: typeof commentsTypes.APPROVE_COMMENTS_SUCCESS;
  payload: ApproveCommentsSuccessPayload;
}
export interface AddCommentFailure {
  type: typeof movieTypes.ADD_COMMENT_FAILURE;
  payload: AddCommentFailurePayload
}
export interface ApproveCommentsFailure {
  type: typeof commentsTypes.APPROVE_COMMENTS_FAILURE;
  payload: ApproveCommentsFailurePayload
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
  | Fetchcomments
  | FetchcommentsSuccess
  | FetchcommentsFailure


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
  | DeleteUser
  | DeleteUserFailure
  | DeleteUserSuccess
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFailure


  export type CommentsActions =
  | GetAllCommentsSuccess
  | GetAllComments
  | GetAllCommentsFailure
  | ApproveComments
  | ApproveCommentsSuccess
  | ApproveCommentsFailure
  | DeleteComment
  | DeleteCommentSuccess
  | DeleteCommentFailure



