import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

class ModalPop extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Dialog>
            <Modal.Header closeButton onClick={this.handleClose}>
              <Modal.Title>{this.props.chosenBeast.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src={this.props.chosenBeast.image_url} alt={this.props.imageText} />
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default ModalPop;