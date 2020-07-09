import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import * as reducers from'./reducers';

export const reducer = combineReducers(reducers);

export function configureStore(preloadedState){
    const store = createStore(reducer, preloadedState, composeWithDevTools())
    return store;
}


