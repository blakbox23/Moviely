import { movieTypes } from '../ActionTypes/Movietypes'
import {
    FetchmoviesFailure,
    FetchmoviesFailurePayload,
    Fetchmovies,
    FetchmoviesSuccess,
    FetchmoviesSuccessPayload
  } from "../types/types";


  //action creator
 
  export const fetchMovies = (): Fetchmovies => ({
    type: movieTypes.FETCH_MOVIES
  });
  
  export const fetchmoviesSuccess = (
    payload: FetchmoviesSuccessPayload
  ): FetchmoviesSuccess => ({
    type: movieTypes.FETCH_MOVIES_SUCCESS,
    payload
  });
  
  export const fetchmoviesFailure = (
    payload: FetchmoviesFailurePayload
  ): FetchmoviesFailure => ({
    type: movieTypes.FETCH_MOVIES_FAILURE,
    payload
  });
  
