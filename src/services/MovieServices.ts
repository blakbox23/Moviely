// import axios from 'axios';
// import { IMovie } from '../store/types/types'

// export const getMovies = () => axios.get<IMovie[]>("http://localhost:8000/movies");

import ApiService from "./ApiServices";
// import { IMovie } from "../store/types/types";

const ENDPOINTS = {
    MOVIES: '/movies',
  };

  class MovieService extends ApiService {

    getMovies = (values: string) => {
        console.log(ENDPOINTS.MOVIES)
        return this.apiClient.get(ENDPOINTS.MOVIES);  
    }
}

export const movieService: any = new MovieService();