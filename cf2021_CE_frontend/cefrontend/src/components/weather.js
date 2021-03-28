import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'

class WeatherComp extends React.Component{

  render() {
    return (
      <>
      <h3>Weather</h3>
      <ListGroup variant="flush">
        {this.props.theWeather.map((item, idx) => {
          return (
            <ListGroup.Item disabled className='listitem' key={idx}>
              {`On ${item.time} expect ${item.forecast}`}
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </>
    )
  }
}

export default WeatherComp;