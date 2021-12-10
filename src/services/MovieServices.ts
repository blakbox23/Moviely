import ApiService from "./ApiServices";

const ENDPOINTS = {
    MOVIES: '/movies/',
  };

  class MovieService extends ApiService {

    getMovies = (values: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES);  
    }

    getMoviesByTitle = (values: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES+'?title='+values);  
    }

    getMoviebyid = (id: string ) => {       
        return this.apiClient.get(ENDPOINTS.MOVIES + id + '/');  
    }

    createMovie = (values: object) => {
        return this.apiClient.post(ENDPOINTS.MOVIES, values);
      }
}

export const movieService: any = new MovieService(); 