import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        {/* Your links should go here */}
          <NavLink to="/red" exact to="/red">Red</NavLink>
          <NavLink to="/red/orange">Orange</NavLink>
          <NavLink to="/red/yellow">Yellow</NavLink>
          <NavLink to="/green">Green</NavLink>
          <NavLink to="/blue" exact to="/blue">Blue</NavLink>
          <NavLink to="/blue/indigo">Add indigo</NavLink>
          <NavLink to="/violet">Violet</NavLink>
        <div id="rainbow">
          <Route path="/red" component={Red} />
          <Route path="/green" component={Green} />
          <Route path="/blue" component={Blue} />
          <Route path="/violet" component={Violet} />
          {/* Your routes should go here */}
        </div>
      </div>
    );
  }
};

export default Rainbow;
