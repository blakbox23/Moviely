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
    FetchFilteredMovies,
    FetchFilteredMoviesSuccessPayload,
    FetchFilteredMoviesSuccess,
    FetchFilteredMoviesFailurePayload,
    FetchFilteredMoviesFailure,
    DeleteMovie,
    DeleteMovieSuccess,
    DeleteMovieFailure,
    DeleteMovieSuccessPayload,
    DeleteMovieFailurePayload,
    EditMovie,
    EditMovieSuccessPayload,
    EditMovieSuccess,
    EditMovieFailure,
    EditMovieFailurePayload,
    AddComment,
    IcommentObject,
    Icomment,
    AddCommentSuccess,
    AddCommentFailure,
    AddCommentFailurePayload,
    AddCommentSuccessPayload,
    Fetchcomments,
    FetchcommentsSuccessPayload,
    FetchcommentsSuccess,
    FetchcommentsFailurePayload,
    FetchcommentsFailure,
    FetchcommentsPayload,
    

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

  export const fetchcomments = (payload: string): Fetchcomments => ({ 
    type: movieTypes.FETCH_COMMENTS,
    payload
  });
  export const fetchcommentsSuccess = (payload: FetchcommentsSuccessPayload): FetchcommentsSuccess => ({
    type: movieTypes.FETCH_COMMENTS_SUCCESS,
    payload
  });
  export const fetchcommentsFailure = (payload: FetchcommentsFailurePayload): FetchcommentsFailure => ({
    type: movieTypes.FETCH_COMMENTS_FAILURE,
    payload
  }); 

  export const fetchFilteredMovies = (payload: object): FetchFilteredMovies => ({
    type: movieTypes.FETCH_FILTERED_MOVIES,
    payload
  }); 
  export const fetchFilteredMoviesSuccess = (payload: FetchFilteredMoviesSuccessPayload): FetchFilteredMoviesSuccess => ({
    type: movieTypes.FETCH_FILTERED_MOVIES_SUCCESS,
    payload
  });
  export const fetchFilteredMoviesFailure = (payload: FetchFilteredMoviesFailurePayload): FetchFilteredMoviesFailure => ({
    type: movieTypes.FETCH_FILTERED_MOVIES_FAILURE,
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



  export const createMovie = (payload: object): CreateMovie => {
    return {
      type: movieTypes.CREATE_MOVIE,
      payload
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


  export const deleteMovie = (payload: string): DeleteMovie => ({
      type: movieTypes.DELETE_MOVIE,
      payload  
  });

  export const deleteMovieSuccess = (payload: DeleteMovieSuccessPayload): DeleteMovieSuccess => ({
    type: movieTypes.DELETE_MOVIE_SUCCESS,
    payload
  });

  export const deleteMovieFailure = (payload: DeleteMovieFailurePayload): DeleteMovieFailure => ({
    type: movieTypes.DELETE_MOVIE_FAILURE,
    payload
  }); 

  export const editMovie = (payload: object): EditMovie => {
    return {
      type: movieTypes.EDIT_MOVIE,
      payload
    };
  };
  export const editMovieSuccess = (payload: EditMovieSuccessPayload): EditMovieSuccess => ({
    type: movieTypes.EDIT_MOVIE_SUCCESS,
    payload
  });
  export const editMovieFailure = (payload: EditMovieFailurePayload): EditMovieFailure => ({
    type: movieTypes.EDIT_MOVIE_FAILURE,
    payload
  });

  export const addComment = (payload: IcommentObject): AddComment => {
    return {
      type: movieTypes.ADD_COMMENT,
      payload
    };
  };
  export const addCommentSuccess = (payload: AddCommentSuccessPayload): AddCommentSuccess => {
    return {
      type: movieTypes.ADD_COMMENT_SUCCESS,
      payload
    };
  };
  export const addCommentFailure = (payload: AddCommentFailurePayload): AddCommentFailure => {
    return {
      type: movieTypes.ADD_COMMENT_FAILURE,
      payload
    };
  };


  
