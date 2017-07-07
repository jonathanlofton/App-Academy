import React from 'react';

// wait until the DOM is fully loaded so you have a target to render into, ReactDom.render will replace entire content of target HTML element.

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 })
  }

  // each react component should be displaying
  // with a render method;
  render() {
    return (
      <div>
        <button onClick={this.click.bind(this)}>CLICK ME!</button>
        // interpolates data to render
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default ClickCounter;
