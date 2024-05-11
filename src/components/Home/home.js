import React from 'react';
import './home.css';
import Section1 from './Section1/section1';
import Header from '../Header/header';
import Finder from './Finder/finder';
import Footer from '../Footer/footer';

function Home() {

  return (
    <>
      <Header />
      <Section1 />
      <Finder />
      <Footer />
    </>
  );
}

export default Home;