import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Section1 from './Section1/section1';
import Section2 from './Section2/section2';
import ItemHelp from '../Search/ItemHelp/itemHelp'
import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <div className="newsHeader">
        <h1 className="newsTitle">Терміновий пошук</h1>
        <p className="allNewsLink">Переглянути більше</p>
      </div>
      <ItemHelp />
      <Footer />
    </>
  );
}

export default Home
