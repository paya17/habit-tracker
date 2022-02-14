import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './app'; 
import '@fortawesome/fontawesome-free/js/all.js'; 
import SimpleHabit from './components/simpleHabit'; //import

ReactDOM.render(  
  <React.StrictMode> 
    <SimpleHabit />  {/*App을 SimpleHabit으로 바꿔준다*/}
  </React.StrictMode>,
  document.getElementById('root')
);

