import {combineReducers} from '@reduxjs/toolkit';
import {createStore} from '@reduxjs/toolkit';
import {applyMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import watchGetUser from './sagas';
import getUserReducer from './reducers';

const rootReducer = combineReducers({
  user: getUserReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchGetUser);

export default store;
