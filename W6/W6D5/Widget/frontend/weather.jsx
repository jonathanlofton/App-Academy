import React from 'react';

const toQueryString = (obj) => {
  let parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
}


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null};
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(pos){
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    const apiKey = 'b0ce620b6d58efcd91b5b2fddf51d8da'
    let url =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`
    url += `&APPID=${apiKey}`

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({ weather: data});
      }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        { this.state.weather ?
          <div className="weather">
            <h2>{this.state.weather.name}</h2>
            <h2>{Math.floor((this.state.weather.main.temp) * (9/5) - 459.67)} F</h2>
          </div> : "loading Weather..."
        }
      </div>
    );
  }
}
