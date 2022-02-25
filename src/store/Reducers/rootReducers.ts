import { combineReducers } from "redux";
import MoviesReducer from './MovieReducers/MoviesReducer';
import RatingsReducer from "./RatingReducers/RatingsReducer";
import UserReducer from "./UserReducer/UserReducer";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  ratings: RatingsReducer,
  user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
