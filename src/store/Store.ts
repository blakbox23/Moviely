import createSagaMiddleware from '@redux-saga/core'
// import moviesReducer from './Reducers/MoviesReducer'
import {createStore, applyMiddleware} from 'redux'
import rootSaga from './Sagas/rootSaga'
import rootReducer from './Reducers/rootReducers'
import logger from "redux-logger";



    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

    sagaMiddleware.run(rootSaga)


export default store
