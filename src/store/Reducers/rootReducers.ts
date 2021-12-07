import { combineReducers } from "redux";
// import movieByIdReducer from "./MovieReducers/MovieByIdReducer";
import MoviesReducer from './MovieReducers/MoviesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  // movie: movieByIdReducer
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
