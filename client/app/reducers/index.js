import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session from './session';

const rootReducer = combineReducers({ session: session,
                                      routing: routerReducer });

export default rootReducer;
