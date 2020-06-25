import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import './index.css';

import {store} from './store';

console.log(store);

ReactDOM.render(<Root />, document.getElementById('root'));
