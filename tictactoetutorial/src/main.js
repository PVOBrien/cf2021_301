import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './hornedBeasts/hornedBeasts';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  render() {
    return (
      <>
        <CardColumns>
          {this.props.beastsAll.map((theBeast, index) => {
            return(
            <div key={index}>
              <HornedBeasts
                image={theBeast.image_url}
                title={theBeast.title}
                desc={theBeast.description}
                key={index}
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