import { combineReducers } from "redux";
import MoviesReducer from './MoviesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
