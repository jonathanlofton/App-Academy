import React from 'react';
import ReactDOM from 'react-dom';

// import calculator
// import Calculator from './calculator';
import Calculator from './calculator';

// to stop a document from running until the DOM is loadded
// document.addEventListener('DOMContentLoaded', function ())
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Calculator />, document.getElementById('main'));
});
