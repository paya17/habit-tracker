import React from 'react';
import ReactDOM from 'react-dom'; //1.react-dom이라는 라이브러리에서 ReactDOM 클래스를 import
import './index.css';
import App from './app'; 

ReactDOM.render(  //2.*ReactDOM 클래스에 있는 render함수을 이용해서, document페이지에 있는 id가 root인 태그를 가져와서 그 태그에 최상위 컴포넌트인 Root컴포넌트(App컴포넌트)를 연결시켜준다 (*컴포넌트를 html과 연결시켜준다)
  <React.StrictMode> 
    <App />  {/*최상위 컴포넌트인 App컴포넌트*/}
  </React.StrictMode>,
  document.getElementById('root')
);

