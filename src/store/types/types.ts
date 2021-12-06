import { movieTypes } from "../ActionTypes/Movietypes";

export interface IMovie {
    id: number;
    title: string;
    genre: string;
    year: number;
    runtime: number;
    imageUrl: string;
    country: string;
    description: string;
    comments: object[];
    ratings: object[];
    movieTrailer: string;
  }
  

export interface MoviesState {
  pending: boolean;
  movies: IMovie[];
  error: string | null;
}

export interface FetchmoviesSuccessPayload {
  movies: IMovie[]; 
}
export interface FetchmoviesFailurePayload {
  error: string;
}
export interface FetchMovieByIDPayload {
  id: string;
}
export interface FetchMovieByIDSuccessPayload {
  movie: IMovie;
}
export interface FetchMovieByIDFailurePayload {
  error: string;
}



export interface Fetchmovies {
  type: typeof movieTypes.FETCH_MOVIES;
}
export interface FetchMovieByID {
  type: typeof movieTypes.FETCH_MOVIE_BY_ID;
  payload: FetchMovieByIDPayload
}


export type FetchmoviesSuccess = {
  type: typeof movieTypes.FETCH_MOVIES_SUCCESS;
  payload: FetchmoviesSuccessPayload;
};

export type FetchmoviesFailure = {
  type: typeof movieTypes.FETCH_MOVIES_FAILURE;
  payload: FetchmoviesFailurePayload;
};

export interface FetchMovieByIDSuccess {
  type: typeof movieTypes.FETCH_MOVIE_BY_ID_SUCCESS;
  payload: FetchMovieByIDSuccessPayload
}
export interface FetchMovieByIDFailure {
  type: typeof movieTypes.FETCH_MOVIE_BY_ID_FAILURE;
  payload: FetchMovieByIDFailurePayload
}



export type MoviesActions =
  | Fetchmovies
  | FetchmoviesSuccess
  | FetchmoviesFailure
  | FetchMovieByID
  | FetchMovieByIDSuccess
  | FetchMovieByIDFailure
