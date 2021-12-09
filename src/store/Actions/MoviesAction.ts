import { movieTypes } from '../ActionTypes/Movietypes'
import {
    FetchmoviesFailure,
    FetchmoviesFailurePayload,
    Fetchmovies,
    FetchmoviesSuccess,
    FetchmoviesSuccessPayload,
    FetchMovieByID,
    FetchMovieByIDSuccess,
    FetchMovieByIDSuccessPayload,
    FetchMovieByIDFailure,
    FetchMovieByIDFailurePayload,
    CreateMovie,
    CreateMovieSuccess,
    CreateMovieFailure,
    CreateMovieSuccessPayload,
    CreateMovieFailurePayload,

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


  export const fetchMovieById = (payload: string): FetchMovieByID => ({
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


  export const createMovie = (data: object): CreateMovie => {
    return {
      type: movieTypes.CREATE_MOVIE,
      payload: data
    };
  };
  export const createMovieSuccess = (payload: CreateMovieSuccessPayload): CreateMovieSuccess => ({
    type: movieTypes.CREATE_MOVIE_SUCCESS,
    payload
  });
  export const createMovieFailure = (payload: CreateMovieFailurePayload): CreateMovieFailure => ({
    type: movieTypes.CREATE_MOVIE_FAILURE,
    payload
  }); 


  
