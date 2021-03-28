import React from 'react';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherComp from './components/weather';
import MoviesComponentized from './components/movieMove';
import LocationComponent from './components/locationComp';

import { Form, Button, Alert } from 'react-bootstrap';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      list: [],
      weatherList: [],
      movieList: [],
      isError: false,
      displayResults: false,
      weatherResults: false,
      movieResults: false,
      error: false,
      searchQuery: '',
      imgSrc: '',
      theMessage: ''
    }
  }

  componentDidMount = async () => {
    const results = await axios.get(`${process.env.REACT_APP_SERVER}/`);
    const results2 = await axios.get(`${process.env.REACT_APP_SERVER}/bananas`);
    console.log(results.data);
    console.log(results2.data);
  }

  getLocationInfo = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const location = await axios.get(url).catch(error => {
      if (error.response) {
        this.setState({ error: true });
        console.log(error.response.data); // error.response.status || error.response.headers
        return;
      } else if (error.request) {
        console.log(error.request);
        return;
      } else {
        console.log('you survived.')
      }
      return;
    });
    const locationArray = location.data;
    this.setState({
      location: locationArray[0],
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
      error: false
    });
    this.getForecastInfo();
    this.getMovieInfo();
  }

  getForecastInfo = async (e) => {
    try {
      const SERVER = process.env.REACT_APP_SERVER; // uncertain this is it.
      const query = { lat: this.state.location.lat, lon: this.state.location.lon };
      const weather = await axios.get(`${SERVER}/weather`, { params: query });
      const weatherArr = weather.data;
      this.setState({ weatherList: weatherArr, weatherResults: true });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  getMovieInfo = async (e) => {
    try {
      const SERVER = process.env.REACT_APP_SERVER;
      const query = { searchOn: this.state.searchQuery };
      const movies = await axios.get(`${SERVER}/movie`, { params: query });
      let moviesArr = movies.data;
      this.setState({ movieList: moviesArr, movieResults: true });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <>
        {this.state.error &&
          <>
            <Alert id="alert" variant={'warning'}>What happened?!</Alert>
          </>
        }

        <Form onSubmit={this.getLocationInfo}>
          <Form.Group controlId="formlocation">
            <Form.Label>Location</Form.Label>
            <Form.Control onChange={(e) => this.setState({ searchQuery: e.target.value })} type="text" placeholder="Where do you want to go?" />
            <Form.Text className="text-muted">🎵The road goes ever on and on.🎵</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>

        {this.state.displayResults &&
          <LocationComponent
            theLocation={this.state.location}
            theImage={this.state.imgSrc}
            theName={this.state.searchQuery}
          />
        }

        {this.state.movieResults && <MoviesComponentized moviesToList={this.state.movieList} />
        }

        {this.state.weatherResults && <WeatherComp theWeather={this.state.weatherList} />}
      </>
    );
  }
}

export default Forecast;
