import { movieTypes } from "../ActionTypes/Movietypes";

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
  
export interface MoviesState {
  pending: boolean;
  error: string | null;
  movies: IMovie[];
  movie: IMovie | undefined;
}
// export interface MovieState {
//   pending: boolean;
//   movie: IMovie | undefined;
//   error: string | null;
// }

export interface FetchmoviesSuccessPayload {
  movies: IMovie[]; 
}
export interface FetchmoviesFailurePayload {
  error: string;
}
// export interface FetchMovieByIDPayload {
//   id: string;
// }
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
  // | FetchMovieByIDPayload
