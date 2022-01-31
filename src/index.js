import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './app'; 
import '@fortawesome/fontawesome-free/js/all.js'; //추가

ReactDOM.render(  //최상위 컴포넌트를 html과 연결시켜준다
  <React.StrictMode> 
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);

