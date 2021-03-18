import React from 'react';
import Header from './header/header'; // always start with "./"
import Footer from './footer/footer';
import Main from './main';
import HornedBeasts from './hornedBeasts/hornedBeasts';
import Json from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import ModalPop from './modal.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newData: Json,
      displayModal: false,
      chosenBeast: {} // might be {} instead
    }
  }

  displayAsModal = (index) => {
    this.setState({
      favoriteBeast: this.state.newData[index],
      displayModal: true
    })
  }

  handleClose = () => {
    this.setState({ displayModal: false })
  }


  render() {
    return (
      <>
        <Header />
        <Main
          beastsAll={this.state.newData}
          displayAsModal={this.displayAsModal}
        />
        <ModalPop
          show={this.state.displayModal}
          handleClose={this.handleClose}
          selectedBeast={this.state.chosenBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
