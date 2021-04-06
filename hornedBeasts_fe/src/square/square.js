import React from 'react';

class Square extends React.Component {
  render() {
    return(
      <div id="square">
        <h1>{this.props.value}</h1>
      </div>
    )
  }
}

export default Square;