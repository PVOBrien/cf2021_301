import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      searchQuery: '',
      imgSrc: '',
      displayResults: false,
      error: false
    }
  }

  getLocationInfo = async (e) => {
    e.preventDefault();
    console.log(this.state.searchQuery);
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const location = await axios.get(url).catch(error => {
      if (error.response) {
        this.setState({ error: true })
        console.log(this.state.error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
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
  }

  render() {
    console.log(this.state)
    return (
      <>
        <form onSubmit={this.getLocationInfo} >
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="city" />
          <button type='submit'>Check it out!</button>
        </form>
        <h1>Howdy!</h1>

        {this.state.error &&
          <>
            <Alert id="alert" variant={'warning'}>
              Where are we? Did you look for the right place?
            </Alert>
          </>
        }


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
      </>
    )
  }
}

export default App;
