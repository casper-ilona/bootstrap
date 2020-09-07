import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

document.getElementById("menu").onclick = function () {
    const x = document.getElementById("myTopnav");
    
    x.classList.toggle('responsive')
};


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();  
