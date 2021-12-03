import axios from 'axios';
import { IMovie } from '../store/types/types'

export const getMovies = () => axios.get<IMovie[]>("http://localhost:8000/movies");
