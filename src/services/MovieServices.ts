import ApiService from "./ApiServices";

const ENDPOINTS = {
    MOVIES: '/movies',
    MOVIE: '/movies/:id'
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