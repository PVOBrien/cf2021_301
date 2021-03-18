import React from 'react';
import Header from './header/header'; // always start with "./"
import Footer from './footer/footer';
import Main from './main';
import Json from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      chosenBeast: this.state.newData[index],
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
          chosenBeast={this.state.chosenBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
