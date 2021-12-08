import ApiService from "./ApiServices";

const ENDPOINTS = {
    MOVIES: '/movies',
    MOVIE: '/movies/cb9c8dc9-c3d0-4517-a3a8-498456e3e4ec'
  };

  class MovieService extends ApiService {

    getMovies = (values: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES);  
    }

    getMoviebyid = (values: string) => {      
        return this.apiClient.get(ENDPOINTS.MOVIE);  
    }

    
}

export const movieService: any = new MovieService();