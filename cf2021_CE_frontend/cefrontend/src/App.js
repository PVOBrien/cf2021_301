import React from 'react';
import './App.css';
import axios from "axios";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isListReady: false,
      isError: false
    }
  }

  componentDidMount = async () => {
    const SERVER = 'http://localhost:3001';

    try {
      const theWeather = await axios.get(`${SERVER}/weather`);
      const weatherData = theWeather.data;
      console.log('here', weatherData);
      this.setState({ list: weatherData, isListReady: true });
    } catch (err) {
      console.log('we have an error!');
      this.setState({ isError: true });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isListReady &&
            <>
              {this.state.list.map((item, idx) => {
                return (
                  <div key={idx} className='weather'>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </>
          }
          {this.state.isError &&
            <>
              return (
                <p>We have a problem!</p>
              )
            </>
          }
        </header>
      </div >
    );
  }
}

export default Forecast;
