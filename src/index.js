import React from 'react';
import ReactDOM from 'react-dom';
import {view as Login} from './login/';
import store from './Store.js';
import {Provider} from 'react-redux';


ReactDOM.render(<Provider store={store}><Login /></Provider>, document.getElementById('root'));
