import React from 'react';
import Section1 from './Section1/section1';
import Header from '../Header/header';
import Finder from './Finder/finder';
import Footer from '../Footer/footer';
import ItemHelp from './ItemHelp/itemHelp';

function Search() {

  return (
    <>
      <Header />
      <Section1 />
      <Finder />
      <ItemHelp />
      <Footer />
    </>
  );
}

export default Search;