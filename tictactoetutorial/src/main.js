import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './hornedBeasts/hornedBeasts';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      favActivity: '',
      isReal: false
    }
  }

  updateName = (e) => this.setState({ name: e.target.value });

  thisBool = (e) => this.setState({ isReal: !this.state.isReal });

  showOnSubmit = (event) => {
    event.preventdefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="theThing">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this.updateName} type="text" placeholder="Enter email" /> {/* you don't track the element names in React (this way), you set state, *THEN USE STATE INSTEAD* of the actual element. */}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check onChange={this.thisBool} type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onSubmit={this.showOnSubmit} variant="primary" type="submit">
            SubmitEE
          </Button>
        </Form>

        <CardColumns>
          {this.props.beastsAll.map((theBeast, index) => {
            return (
              <div key={index}>
                <HornedBeasts
                  image={theBeast.image_url}
                  title={theBeast.title}
                  desc={theBeast.description}
                  key={index}
                  index={index}
                  displayAsModal={this.props.displayAsModal}
                />
              </div>
            )
          })}
        </CardColumns>
      </>
    )
  }
}

export default Main;