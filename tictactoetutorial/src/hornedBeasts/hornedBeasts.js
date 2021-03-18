import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './hornedBeasts.css';
import '../modal.js';
import ModalPop from '../modal.js';

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

  turnToModal = () => {
    this.props.displayAsModal(this.props.index);
    console.log('turnToModal');
  }

  render() {
    return (
      <>
      <Card className='card' style={{ width: '20rem' }}>
        <Card.Img variant="top" src={this.props.image}/>
        <Card.Body onClick={this.turnToModal}>
          <Card.Title>{this.props.title} clicks: {this.state.timesClicked} times</Card.Title>
          <Card.Text>
            {this.props.desc}
          </Card.Text>
          <Button onClick={this.clickCounter} variant="primary">Click 💖 if you like!</Button>
        </Card.Body>
      </Card>

      {/* <ModalPop
        show={this.state.show}
        thePic={this.props.image}
        imageText={this.props.title}
      /> */}

      </>
    )
  }
}

export default HornedBeasts;

// return (
//   <>
//   <Card className='card' style={{ width: '20rem' }}>
//     <Card.Img variant="top" src={this.props.image}/>
//     <Card.Body>
//       <Card.Title>{this.props.title} clicks: {this.state.timesClicked} times</Card.Title>
//       <Card.Text>
//         {this.props.desc}
//       </Card.Text>
//       <Button onClick={this.clickCounter} variant="primary">Click 💖 if you like!</Button>
//     </Card.Body>
//   </Card>

{/* <ModalPop
show={this.state.show}
thePic={this.props.image}
imageText={this.props.title}
/> */}