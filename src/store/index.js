import {combineReducers} from 'redux';

import {bikes, filter, cart } from './reducers';

export const reducer = combineReducers({
    bikes,
    filter,
    cart,
});