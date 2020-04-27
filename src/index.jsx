import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state/store/index';
import App from './views/App.tsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
