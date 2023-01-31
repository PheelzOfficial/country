import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import RestApiContext from './components/Context/RestApiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <RestApiContext>
      <App />
    </RestApiContext>
  </BrowserRouter>
  // </React.StrictMode>
);


