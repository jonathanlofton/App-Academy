
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Weather from './weather.jsx'

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    )
  }
}



document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementById('main');
  ReactDOM.render(<Root />, main);
});
