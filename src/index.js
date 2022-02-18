import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import StoreProvider from './store';

// import 'src/styles/index.scss';

ReactDOM.render(
  <StoreProvider>
    <Router />
  </StoreProvider>,
  document.getElementById('root')
);