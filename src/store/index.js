import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import {bikes, filter, cart } from './reducers';

export const reducer = combineReducers({
    bikes,
    filter,
    cart,
});


export const store = createStore(reducer, composeWithDevTools());

