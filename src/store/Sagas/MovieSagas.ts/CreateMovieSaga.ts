import { put, call, takeEvery, all } from 'redux-saga/effects';
import { createMovieSuccess, createMovieFailure } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'
import { RootState } from '../../Reducers/rootReducers';
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'


function* workCreateMovie(action:any): any {
    try {
       const response = yield call(movieService.createMovie, action.payload);

    yield put(
        createMovieSuccess({
          movie: response.data
        })
      )

      // alert('Movie was created successfylly!');
      success('Movie added successfully')
    } catch (e: any) {
      // alert("Something went wrong!");
      notify("An error occured")
      yield put(
        createMovieFailure({ 
          error: e.message
        })
      ); 
    }
  }

function* CreateMovieSaga() {
    yield all([takeEvery(movieTypes.CREATE_MOVIE, workCreateMovie)])
}



export default CreateMovieSaga;