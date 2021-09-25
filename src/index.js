// Based on MacLinz's YouTube tutorial at https://youtu.be/ajgxZ5hBSHQ

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


if (module.hot) module.hot.accept();  // enable live reloading

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

