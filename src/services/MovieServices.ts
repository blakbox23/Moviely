import ApiService from "./ApiServices";
import { IfilteredMovie, IMovie } from "../store/types/types";

const ENDPOINTS = {
    MOVIES: '/movies/',
    FILTER: '/movies/?',
  };

  class MovieService extends ApiService {

    getMovies = (values: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES);  
    }
    getComments = (values: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES+values+'/comments');  
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

    editMovie = (values: IMovie) => {
        return this.apiClient.put(ENDPOINTS.MOVIES + values.id, values);
      }

    searchedMovies = (values: IfilteredMovie) => {

        if (values.title === ''){values.title=undefined}
        if (values.genre === ''){values.genre=undefined}
        if (values.year === ''){values.year=undefined}

        let endPoint = ENDPOINTS.FILTER 

        if(values.title !== undefined){
          endPoint = endPoint + "title=" + values.title +'&'
        
        } if(values.year !== undefined){
          endPoint = endPoint  + "year=" + values.year+'&'
        
        } if(values.genre !== undefined){
          endPoint = endPoint+ "genre=" + values.genre +'&'          
        }
          
        endPoint = endPoint + "grade=" + values.grade

        return this.apiClient.get(endPoint);
      }

      removeMovie = (id: any) => {
        return this.apiClient.delete(ENDPOINTS.MOVIES + id, id);
      }

      addComment = (values: any) => {
        return this.apiClient.post(ENDPOINTS.MOVIES + values.movieId + '/comments', values);
      }
}

export const movieService: any = new MovieService(); 