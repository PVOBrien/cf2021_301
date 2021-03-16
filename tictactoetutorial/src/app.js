import React from 'react';
import Header from './header/header'; // always start with "./"
import Footer from './footer/footer';
import HornedBeasts from './hornedBeasts/hornedBeasts';
import Json from './data.json';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     horns: JSON.parse(Json)
  //   }
  // }

  render() {
    return (
      <>
        <Header />
        <main>
          {Json.map((creature, index) => {
            return (
              <HornedBeasts
                title={creature.title}
                image={creature.image_url}
                desc={creature.description}
                />
            )
          }
          )}
          {/* <HornedBeasts title='Hello' desc='dexc' image='zilch' /> */}
          {/* <HornedBeasts title={this.state.title} desc={this.state.desc} image={this.state.image} /> */}
        </main>
        <Footer />
      </>
    )
  }
}

export default App;
