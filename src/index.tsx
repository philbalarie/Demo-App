import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// Redux Imports
import { Provider } from 'react-redux';
import store from './configureStore';

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

