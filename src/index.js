import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './app'; 
import '@fortawesome/fontawesome-free/js/all.js'; //추가

ReactDOM.render(  //최상위 컴포넌트(App컴포넌트)를 html(root라는 id를 가진 요소)과 연결시켜준다
  <React.StrictMode> 
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);

