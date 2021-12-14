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
        if (values.year === ''){values.year=undefined}
        let endPoint = ENDPOINTS.FILTER 
        if(!values.title && values.year && values.genre && values.grade){
          endPoint = endPoint + "genre=" + values.genre 
          + "&year=" + values.year
          + "&grade=" + values.grade
        }else if(!values.year && values.title && values.genre && values.grade ){
          endPoint = endPoint  + "title=" + values.title 
          + "&genre=" + values.genre
          + "&grade=" + values.grade
        
        }else if(values.year===undefined && !values.title){
          endPoint = ENDPOINTS.FILTER + "genre=" + values.genre
        + "&grade=" + values.grade
            
        }
        else{
          
          endPoint = ENDPOINTS.FILTER  + "title=" + values.title 
        + "&genre=" + values.genre 
        + "&year=" + values.year
        + "&grade=" + values.grade
        }
        console.log('endPoint')
        console.log(endPoint)
        return this.apiClient.get(endPoint);
      }
}

export const movieService: any = new MovieService(); 