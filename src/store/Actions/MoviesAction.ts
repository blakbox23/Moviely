import { movieTypes } from '../ActionTypes/Movietypes'
import {
    FetchmoviesFailure,
    FetchmoviesFailurePayload,
    Fetchmovies,
    FetchmoviesSuccess,
    FetchmoviesSuccessPayload,
    FetchMovieByID,
    FetchMovieByIDPayload,
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
    type: movieTypes.GET_MOVIE_BY_ID, 
    payload
  }); 


  
