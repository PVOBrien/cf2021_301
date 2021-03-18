import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ModalPop extends React.Component {

  render() {
    console.log(this.props)
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Dialog>
            <Modal.Header closeButton onClick={this.hideModal}>
              <Modal.Title>{this.props.chosenBeast.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src={this.props.chosenBeast.image_url} alt={this.props.imageText} />
            </Modal.Body>

            {/* <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer> */}
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default ModalPop;