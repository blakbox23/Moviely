import { combineReducers } from "redux";
import CommentsReducer from "./CommentsReducers/CommentsReducer";
import MoviesReducer from './MovieReducers/MoviesReducer';
import RatingsReducer from "./RatingReducers/RatingsReducer";
import UserReducer from "./UserReducer/UserReducer";

const rootReducer = combineReducers({
  movies: MoviesReducer,
  ratings: RatingsReducer,
  user: UserReducer,
  comments: CommentsReducer
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
