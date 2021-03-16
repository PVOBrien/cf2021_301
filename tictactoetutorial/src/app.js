import React from 'react';
import Square from './square/square.js'; // always start with "./"
import Header from './header/header';
import Footer from './footer/footer';
import HornedBeasts from './hornedBeasts/hornedBeasts';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
        <main>
          <HornedBeasts title={'UniWhal'} desc={'A unicorn and a narwhal nuzzling their horns'} image={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}/>
        </main>
        <Footer />
      </>
    )
  }
}

export default App;
