import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider  } from 'react-redux';
import { store } from "./redux/store"
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "swiper/css/bundle";
import "./assets/styles/swipperStyles.css"

import './index.css';
import "./assets/styles/main.css"
import "./assets/styles/main.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

