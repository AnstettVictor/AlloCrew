import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import login from '../reducers/login';
import data from '../reducers/data';
import thunk from 'redux-thunk';

//creation du store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(thunk)
);

const rootReducer = combineReducers({login, data}) 

const store = createStore(rootReducer, enhancers);

export default store;