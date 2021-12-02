import createSagaMiddleware from '@redux-saga/core'
import myReducer from './Reducers/MoviesReducer'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import MoviesSagas from './Sagas/MoviesSagas'


function Store() {

    const sagaMiddleware = createSagaMiddleware();
    const rootReducer =  combineReducers( {myReducer} )
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(MoviesSagas)
}

export default Store
