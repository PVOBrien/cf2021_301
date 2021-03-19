import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './hornedBeasts/hornedBeasts';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      favActivity: '',
      isReal: false,
      hornCount: 0,
      filteredBeasts: this.props.beastsAll,
      dropDownTitle: 'Quantity of Horns'
    }
  }

  updateName = (e) => this.setState({ name: e.target.value });
  thisBool = (e) => this.setState({ isReal: !this.state.isReal });
  updateHornSelect = (e) => {
    this.setState({ hornCount: e});
    // console.log('dropdown selected:', e);
    let narrowedBeasts = [];
    narrowedBeasts = this.props.beastsAll.filter(beast => {
      // console.log('beast', beast.horns);
      // console.log(beast.horns === parseInt(e));
      return beast.horns === parseInt(e);
    });
    this.setState({
      filteredBeasts: narrowedBeasts,
      dropDownTitle: e
    });
  };

  showOnSubmit = (event) => {
    event.preventdefault();
    // console.log(this.state);
  };

  render() {
    return (
      <> {/* https://www.pluralsight.com/guides/how-to-capture-the-value-of-dropdown-lists-with-react-bootstrap */}
        <Dropdown onSelect={this.updateHornSelect}>
          <Dropdown.Toggle title='dropDown' variant="success" id="dropdown-basic">
            {this.state.dropDownTitle}
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item href="#/action-1" eventKey={1}>1</Dropdown.Item>
            <Dropdown.Item href="#/action-2" eventKey={2}>2</Dropdown.Item>
            <Dropdown.Item href="#/action-3" eventKey={3}>3</Dropdown.Item>
            <Dropdown.Item href="#/action-4" eventKey={4}>4</Dropdown.Item>
            <Dropdown.Item href="#/action-5" eventKey={5}>5</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <CardColumns>
          {this.state.filteredBeasts.map((theBeast, index) => {
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

{/* <Form>
<Form.Group controlId="theThing">
  <Form.Label>Email address</Form.Label>
  <Form.Control onChange={this.updateName} type="text" placeholder="Enter email" /> you don't track the element names in React (this way), you set state, *THEN USE STATE INSTEAD* of the actual element.
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
</Form> */}