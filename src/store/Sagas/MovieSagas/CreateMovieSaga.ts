import { put, call, takeEvery, all } from 'redux-saga/effects';
import { createMovieSuccess, createMovieFailure } from '../../Actions/MoviesAction'
import { movieService } from '../../../services/MovieServices'
import { movieTypes } from '../../ActionTypes/Movietypes'
import {notify, success} from '../../../components/UI/organisms/Toasts/Toast'


function* workCreateMovie(action:any): any {
    try {
      const responseByTitle = yield call(movieService.getMoviesByTitle, action.payload.title);

      console.log('responseByTitle')
      console.log(responseByTitle.data) 

   if(responseByTitle.data.length===0){
    const response = yield call(movieService.createMovie, action.payload);

    yield put(
        createMovieSuccess({
          movie: response.data
        })
      )
      success('Movie added successfully')
    } else {
         yield put(
        createMovieFailure({ 
          error: 'Movie title already exists'
        })
      ); 
      notify('Movie with given title already exists')
    }}
    
    catch (e: any) {
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