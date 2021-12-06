import { movieTypes } from '../ActionTypes/Movietypes'
import {
    FetchmoviesFailure,
    FetchmoviesFailurePayload,
    Fetchmovies,
    FetchmoviesSuccess,
    FetchmoviesSuccessPayload,
    FetchMovieByID,
    FetchMovieByIDPayload,
    FetchMovieByIDSuccess,
    FetchMovieByIDSuccessPayload,
    FetchMovieByIDFailure,
    FetchMovieByIDFailurePayload,
  } from "../types/types";


  //action creator
 
  export const fetchMovies = (): Fetchmovies => ({
    type: movieTypes.FETCH_MOVIES
  });
  
  export const fetchmoviesSuccess = (payload: FetchmoviesSuccessPayload): FetchmoviesSuccess => ({
    type: movieTypes.FETCH_MOVIES_SUCCESS,
    payload
  });
  
  export const fetchmoviesFailure = (payload: FetchmoviesFailurePayload): FetchmoviesFailure => ({
    type: movieTypes.FETCH_MOVIES_FAILURE,
    payload
  }); 

  export const fetchMovieById = (payload: FetchMovieByIDPayload): FetchMovieByID => ({
    type: movieTypes.FETCH_MOVIE_BY_ID, 
    payload
  }); 

  export const fetchMovieByIdSuccess = (payload: FetchMovieByIDSuccessPayload): FetchMovieByIDSuccess => ({
    type: movieTypes.FETCH_MOVIE_BY_ID_SUCCESS,
    payload
  });
  
  export const fetchMovieByIdFailure = (payload: FetchMovieByIDFailurePayload): FetchMovieByIDFailure => ({
    type: movieTypes.FETCH_MOVIE_BY_ID_FAILURE,
    payload
  }); 


  
