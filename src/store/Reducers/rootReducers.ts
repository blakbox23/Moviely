import { combineReducers } from "redux";
import MoviesReducer from './MovieReducers/MoviesReducer';
import RatingsReducer from "./RatingReducers/RatingsReducer";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  ratings: RatingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
