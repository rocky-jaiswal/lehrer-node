import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index';
import { loginFlow, logoutFlow } from '../sagas/sessionManagement'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loginFlow)
sagaMiddleware.run(logoutFlow)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
