import React from 'react';
import { Provider } from 'react-redux';
import App from './app';



const Root = ({ store }) => (
  <Provider store={ store }>
    <div>
      <h1>Todo App</h1>
      <App/>
    </div>
  </Provider>
);

export default Root;
