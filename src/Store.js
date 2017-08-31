/**
 * Created by ender on 2017/8/30.
 */
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as loginReducer} from './login';

import thunkMiddleware from 'redux-thunk'

import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf;

const reducer = combineReducers({
    login: loginReducer,
});

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);
