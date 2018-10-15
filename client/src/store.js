import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';

// Reducers
import picture from './reducer/picture/'

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({
    picture,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);
