import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import StoreProvider from './store';
import Home from './containers/home';

ReactDOM.render(
  <StoreProvider>
    <Router />
    <Home />
  </StoreProvider>,
  document.getElementById('root')
);