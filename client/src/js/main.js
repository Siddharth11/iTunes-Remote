import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import store from './store'
import { Provider } from 'react-redux'
import clientSideEvents from './clientSideEvents'

const wrapper = document.querySelector('.page-wrapper')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    wrapper
)

clientSideEvents()