import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Section1 from './Section1/section1';
import Section2 from './Section2/section2';

const Home = () => {
    return (
        <>
          <Header />
          <Section1 />
          <Section2 />
          <Footer />
        </>
      );
}

export default Home
