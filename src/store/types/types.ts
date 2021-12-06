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

export interface Fetchmovies {
  type: typeof movieTypes.FETCH_MOVIES;
}

export type FetchmoviesSuccess = {
  type: typeof movieTypes.FETCH_MOVIES_SUCCESS;
  payload: FetchmoviesSuccessPayload;
};

export type FetchmoviesFailure = {
  type: typeof movieTypes.FETCH_MOVIES_FAILURE;
  payload: FetchmoviesFailurePayload;
};

export interface FetchMovieByID {
  type: typeof movieTypes.GET_MOVIE_BY_ID;
  payload: FetchMovieByIDPayload
}



export type MoviesActions =
  | Fetchmovies
  | FetchmoviesSuccess
  | FetchmoviesFailure
  | FetchMovieByID
