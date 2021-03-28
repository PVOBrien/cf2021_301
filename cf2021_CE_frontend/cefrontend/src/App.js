import React from 'react';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import WeatherComp from './components/weather';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      weatherList: [],
      movieList: [],
      isError: false,
      location: {},
      searchQuery: '',
      imgSrc: '',
      displayResults: false,
      weatherResults: false,
      movieResults: false,
      error: false,
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
      // console.log('getForecastInfo');
      const weather = await axios.get(`${SERVER}/weather`, { params: query });
      const weatherArr = weather.data;
      console.log({ weatherArr })
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
      // console.log('Error:', error)
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
          <>
            <h2>{this.state.location.display_name}</h2>
            <Card style={{
              width: '24rem',
              padding: '5px',
              textAlign: 'center'
            }}>
              <Card.Img variant="top" src={this.state.imgSrc} />
              <Card.Body>
                <Card.Title>{this.state.searchQuery}</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>
          </>
        }

        {this.state.movieResults &&
          <>
            <p>Movies</p>
            <Carousel fade wrap='true'>
              {this.state.movieList.map((item, idx) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.image_url}
                      alt={item.title}
                    />
                    <Carousel.Caption>
                      {/* <h3>{item.title}</h3> */}
                      <p>{item.overview}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </>
        }

        {this.state.weatherResults &&

        <WeatherComp theWeather={this.state.weatherList}/>
          // <>
          //   <h3>Weather</h3>
          //   <ListGroup variant="flush">
          //     {this.state.weatherList.map((item, idx) => {
          //       return (
          //         <ListGroup.Item disabled className='listitem'>
          //           {`On ${item.time} expect ${item.forecast}`}
          //         </ListGroup.Item>
          //       )
          //     })}
          //   </ListGroup>
          // </>
        }

      </>
    );
  }
}

export default Forecast;
