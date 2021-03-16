import React from 'react';
import Header from './header/header'; // always start with "./"
import Footer from './footer/footer';
import HornedBeasts from './hornedBeasts/hornedBeasts';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Uniwhal',
      desc: 'A unicorn and a narwhal nuzzling their horns',
      image: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    }
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <HornedBeasts title={this.state.title} desc={this.state.desc} image={this.state.image} />
        </main>
        <Footer />
      </>
    )
  }
}

export default App;
