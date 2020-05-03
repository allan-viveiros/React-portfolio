import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';

import App from './App';
//import './index.css';
import './sass/main.scss';


ReactDOM.render(
  //<React.StrictMode>

    <BrowserRouter>

      <Route path='/' component={App} />
      
    </BrowserRouter>,
 
  //</React.StrictMode>,
  document.getElementById('root')
);


