import ApiService from "./ApiServices";

const ENDPOINTS = {
    MOVIES: '/movies',
  };

  class MovieService extends ApiService {

    getMovies = (values: string) => {
        return this.apiClient.get(ENDPOINTS.MOVIES);  
    }
}

export const movieService: any = new MovieService();