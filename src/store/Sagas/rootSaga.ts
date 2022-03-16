import { all, fork } from "redux-saga/effects";
import moviesSaga from "./MovieSagas/MoviesSagas";
import movieSaga from "./MovieSagas/MovieByIdSaga";
import CreateMovieSaga from "./MovieSagas/CreateMovieSaga";
import FilteredMoviesSaga from "./MovieSagas/FilteredMoviesSaga";
import UpdateRatingSaga from './RatingSagas/UpdateRatingSaga'
import FetchRatingSaga from "./RatingSagas/FetchRatingSaga";
import DeleteMovieSaga from "./MovieSagas/DeleteMovieSaga";
import LoginSaga from "./UserSagas/LoginSaga";
import EditMovieSaga from "./MovieSagas/EditMovieSaga";
import AddCommentSaga from "./MovieSagas/AddCommentSaga";
import commentsSaga from "./MovieSagas/FetchCommentsSaga";
import AllCommentsSaga from "./CommentSaga/GetAllCommentsSaga";
import ApproveCommentsSaga from "./CommentSaga/ApproveCommentsSaga";
import DeleteCommentSaga from "./CommentSaga/DeleteCommentSaga";
import DeleteUserSaga from "./UserSagas/DeleteUserSaga";
import UpdateUserSaga from "./UserSagas/UpdateUserSaga";
import CreateUserSaga from "./UserSagas/CreateUserSaga";
import getWatchedMoviesSaga from "./UserSagas/GetWatchedMoviesSaga";
import AddWatchedMovieSaga from "./UserSagas/AddWatchedMovieSaga";

export default function* rootSaga() {
  yield all([fork(moviesSaga), 
    fork(movieSaga), 
    fork(CreateMovieSaga), 
    fork(FilteredMoviesSaga), 
    fork(UpdateRatingSaga), 
    fork(FetchRatingSaga), 
    fork(DeleteMovieSaga), 
    fork(LoginSaga), 
    fork(EditMovieSaga), 
    fork(AddCommentSaga), 
    fork(commentsSaga), 
    fork(AllCommentsSaga), 
    fork(ApproveCommentsSaga), 
    fork(DeleteCommentSaga),
    fork(DeleteUserSaga),
    fork(UpdateUserSaga),
    fork(CreateUserSaga),
    fork(getWatchedMoviesSaga),
    fork(AddWatchedMovieSaga)
  
  ]);
}
