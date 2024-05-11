import React from 'react';
import './section1.css';
const Section1 = () => {

  return (
    <div className='section1'>
      <div className='divided'>
        <div className='rightSection1'>
          <img src="/section1.svg" alt="Extra" className='extraImage' />
        </div>
        <div className='leftSection1'>
          <div className='quote'>
            <p className='quoteContent'>"Платформа 'UnityHelp' є інноваційним інструментом,
              створеним з метою координації пошуку зниклих осіб в зонах військового конфлікту.</p>
          </div>
          <div className="find-lost">
            <button className="search-button">Повідомити про зниклого</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section1;
