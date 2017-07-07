import React from 'react';
import ReactDOM from 'react-dom';

import ClickCounter from './click_counter';

// wait until the dom is fully loaded to run the function
//afterwards
document.addEventListener("DOMContentLoaded", () => {

  
  const root = document.getElementById('root');
  ReactDOM.render(<ClickCounter />, root);
});
