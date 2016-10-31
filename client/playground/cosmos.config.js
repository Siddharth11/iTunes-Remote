import React from 'react';
import { createStore, applyMiddleware } from 'redux';

import reactCosmosReduxProxy from 'react-cosmos-redux-proxy';
import reducer from '../src/js/reducer';

// Attach the socket mock on the fly, in order to keep the fixture serializable
// and fully editable in the Component Playground editor
const SocketMockProxy = (props) => {
  const {
    nextProxy,
    fixture,
  } = props;
  return React.createElement(nextProxy.value, { ...props,
    nextProxy: nextProxy.next(),
    fixture: { ...fixture,
      reduxState: { ...fixture.reduxState,
        socket: {
          emit: (...args) => console.log('socket emit', args)
        }
      }
    }
  });
};

module.exports = {
  componentPaths: [
    '../src/js/components',
  ],
  globalImports: [
    '../src/scss/main.scss'
  ],
  proxies: [
    SocketMockProxy,
    reactCosmosReduxProxy({
      createStore: (initialState) => createStore(reducer, initialState)
    })
  ],
  containerQuerySelector: '.page-wrapper'
};
