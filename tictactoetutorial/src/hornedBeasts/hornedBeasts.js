import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <div className="aHornedBeast">
        <h2>{this.props.title}</h2>
        <img src={this.props.image}
          alt={this.props.alt}
          title={this.props.title}
          ></img>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

export default HornedBeasts;