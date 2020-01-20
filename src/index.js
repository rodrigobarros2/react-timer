import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //importei o componente Social de "./App"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //Social Importado agora Renderizo o Componente em Root

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();