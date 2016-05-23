import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index';
import { loginFlow, logoutFlow } from '../sagas/sessionManagement'

// create the middlewares
const sagaMiddleware = createSagaMiddleware()
const routingMiddleware = routerMiddleware(browserHistory)

// create store
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware, routingMiddleware));

sagaMiddleware.run(loginFlow)
sagaMiddleware.run(logoutFlow)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
