import { IfetchRatingObject } from "../../components/UI/molecules/RatingComponent/RatingComponent";
import { movieTypes } from "../ActionTypes/Movietypes";
import { ratingTypes } from "../ActionTypes/RatingTypes";

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
    ratings: Irating[];
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
    movieId: string;
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


  export type RatingActions =
  | UpdateRating
  | UpdateRatingSuccess
  | UpdateRatingFailure
  | FetchRating
  | FetchRatingSuccess
  | FetchRatingFailure

