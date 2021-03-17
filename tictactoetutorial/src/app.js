import React from 'react';
import Header from './header/header'; // always start with "./"
import Footer from './footer/footer';
import HornedBeasts from './hornedBeasts/hornedBeasts';
import Json from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <main>
          <CardColumns>
            {Json.map((creature, index) => {
              return (
                <HornedBeasts
                  title={creature.title}
                  image={creature.image_url}
                  desc={creature.description}
                  key={index}
                />
              )
            })}
          </CardColumns>
        </main>
        <Footer />
      </>
    )
  }
}

export default App;
