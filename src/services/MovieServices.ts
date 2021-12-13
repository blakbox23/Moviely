import ApiService from "./ApiServices";
import { IfilteredMovie } from "../store/types/types";

const ENDPOINTS = {
    MOVIES: '/movies/',
    FILTER: '/movies/?',
  };

  class MovieService extends ApiService {

    getMovies = (values: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES);  
    }

    getMoviesByTitle = (values: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES+'?title=' + values);  
    }

    getMoviebyid = (id: string ) => {       
        return this.apiClient.get(ENDPOINTS.MOVIES + id + '/');  
    }

    createMovie = (values: object) => {
        return this.apiClient.post(ENDPOINTS.MOVIES, values);
      }

    searchedMovies = (values: IfilteredMovie) => {
        let endPoint = (
        ENDPOINTS.FILTER + "title=" + values.title 
        + "&genre=" + values.genre 
        + "&year=" + values.year
        + "&grade=" + values.grade
        )
        return this.apiClient.get(endPoint);
      }
}

export const movieService: any = new MovieService(); 