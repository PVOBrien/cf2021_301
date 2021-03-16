import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// assets must be imported up above

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  clickCounter = () => {
    this.setState({ timesClicked: this.state.timesClicked + 1});
  }

  render() {
    return (
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title} has been clicked {this.state.timesClicked} times</Card.Title>
          <Card.Text>
            {this.props.desc}
          </Card.Text>
          <Button onClick={this.clickCounter} variant="primary">Click 👍 if you like!</Button>
        </Card.Body>
      </Card>
      </>
      // <div className="aHornedBeast">
      //   <h2>{this.props.title}</h2>
      //   <img src={this.props.image}
      //     alt={this.props.alt}
      //     title={this.props.title}
      //     width={200}
      //     ></img>
      //   <p>{this.props.desc}</p>
      // </div>
    )
  }
}

export default HornedBeasts;