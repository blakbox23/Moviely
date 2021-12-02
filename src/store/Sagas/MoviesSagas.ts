import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_MOVIES, GET_MOVIES_SUCCESS } from '../Actions/MoviesAction'

function fetchMovies(){
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}


function* workGetMovies() {
    try {
       const movies = yield call(fetchMovies);
       yield put({type: "GET_MOVIES_SUCCESS", movies});
    } catch (e) {
       console.log(e)
    }
 }

function* moviesSaga {
    yield takeEvery("GET_MOVIES", workGetMovies);
}



export default moviesSaga;