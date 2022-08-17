import React from 'react';
import './App.css';
import { AboutUs,Chef,FindUs,Footer,Gallery,Header,Intro,Laurels,Navbar,SpecialMenu } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
};

export default App;
