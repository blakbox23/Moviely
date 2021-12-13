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
  moviesByTitle: IMovie[];
}


export interface FetchmoviesSuccessPayload {
  movies: IMovie[]; 
}
export interface FetchmoviesFailurePayload {
  error: string;
}

export interface FetchMoviesByTitleSuccessPayload {
  moviesByTitle: IMovie[]; 
}
export interface FetchMoviesByTitleFailurePayload {
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


export interface Fetchmovies {
  type: typeof movieTypes.FETCH_MOVIES;
}
export interface FetchMoviesByTitle {
  type: typeof movieTypes.FETCH_MOVIES_BY_TITLE;
  payload: string;
}
export interface FetchMovieByID {
  type: typeof movieTypes.FETCH_MOVIE_BY_ID;
  payload: string
}
export interface CreateMovie {
  type: typeof movieTypes.CREATE_MOVIE;
  payload: object
}


export type FetchmoviesSuccess = {
  type: typeof movieTypes.FETCH_MOVIES_SUCCESS;
  payload: FetchmoviesSuccessPayload;
};
export type FetchmoviesFailure = {
  type: typeof movieTypes.FETCH_MOVIES_FAILURE;
  payload: FetchmoviesFailurePayload;
};

export type FetchMoviesByTitleSuccess = {
  type: typeof movieTypes.FETCH_MOVIES_BY_TITLE_SUCCESS;
  payload: FetchMoviesByTitleSuccessPayload;
};
export interface FetchMoviesByTitleFailure {
  type: typeof movieTypes.FETCH_MOVIES_BY_TITLE_FAILURE;
  payload: FetchMoviesByTitleFailurePayload
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
  | FetchMoviesByTitle
  | FetchMoviesByTitleSuccess
  | FetchMoviesByTitleFailure
