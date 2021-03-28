import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class LocationComponent extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.theLocation.display_name}</h2>
        <Card style={{
          width: '24rem',
          padding: '5px',
          textAlign: 'center'
        }}>
          <Card.Img variant="top" src={this.props.theImage} />
          <Card.Body>
            <Card.Title>{this.props.theName}</Card.Title>
            {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default LocationComponent;