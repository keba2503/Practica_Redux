import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';


import * as reducers from'./reducers';

export const reducer = combineReducers(reducers);

const middleware = [ReduxThunk, ReduxLogger];
const composeEnhancer = composeWithDevTools;

export function configureStore(preloadedState){
    const store = createStore(
        reducer,
        preloadedState,
        composeEnhancer(applyMiddleware(...middleware))
         );
    return store;
}


