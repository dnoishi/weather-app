import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "5d17e2574a7a37e9f53392bb38f7a523";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const unit = e.target.elements.unit.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=${unit}`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values.'
      });
    }
  }
  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      error
    } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={temperature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


