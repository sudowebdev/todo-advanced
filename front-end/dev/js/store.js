import { createStore, applyMiddleware } from 'redux';


import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducers, middleware);
export default store;