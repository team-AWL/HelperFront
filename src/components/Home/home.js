import React, {useEffect} from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Section1 from './Section1/section1';
import Section2 from './Section2/section2';
import ItemHelp from '../Search/ItemHelp/itemHelp'
import './home.css'
import {getCurrentUser} from "../../api";
import {useLocation} from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token_auth = searchParams.get('token');
    const is_true = searchParams.get('reload');

    useEffect(() => {
        if (token_auth) {
            localStorage.setItem('accessToken', token_auth);
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {}
        if (is_true) {
            window.location.replace('/');
        }
    }, []);
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
