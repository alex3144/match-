import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import MainRouter from './mainRouter';
import { Provider } from 'react-redux';
import {
  BrowserRouter
} from 'react-router-dom';
// store.dispatch(loadTranslations()).then(() => {
//   // store.dispatch(bootstrap());
// });

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
