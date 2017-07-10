import React from 'react';

export default class Clock extends React.Component {


  constructor() {
    super()
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    setInterval(() => {this.tick()}, 1000);
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let time = ``;

    if (hours > 12) {
      time = `${hours - 12}:${minutes}:${seconds} PM`
    } else {
      time = `${hours - 12}:${minutes}:${seconds} AM`
    }

    let day = this.state.time.getDate();
    let month = this.state.time.getMonth();
    let year = this.state.time.getFullYear();

    let date = `${day}/${month}/${year}`

    return (
      <div>
        <h1>CLOCK</h1>
        <div className="clock">
          <h2>TIME: {time}</h2>
          <h2>DATE: {date}</h2>
        </div>
      </div>
    )
  }
}
