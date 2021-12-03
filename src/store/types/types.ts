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

export type MoviesActions =
  | Fetchmovies
  | FetchmoviesSuccess
  | FetchmoviesFailure;
