import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


class MoviesComponentized extends React.Component {

  render() {
    return (
      <>
        <p>Movies</p>
        <Carousel fade wrap={true}>
          {this.props.moviesToList.map((item, idx) => {
            return (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={item.image_url}
                  alt={item.title}
                />
                <Carousel.Caption>
                  {/* <h3>{item.title}</h3> */}
                  <p>{item.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </>
    )
  }
}

export default MoviesComponentized;