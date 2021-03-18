import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ModalPop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

hideModal = () => {
  console.log('bump', this.state);
  this.setState({show: false});
}

showModal = () => {
  console.log('bump', this.state);
  this.setState({show: true});
}

  render() {
    return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={this.hideModal}>
          <Modal.Title>{this.props.imageText}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={this.props.thePic} alt={this.props.imageText} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
    )}
}

export default ModalPop;