import React from 'react';
import './section12.css';

const Section12 = () => {
  return (
    <div className='section-container'>
      <div className='divided-container'>
        <div className='right-column'>
          <img src="/section1.svg" alt="Extra" className='extra-image' />
        </div>
        <div className='left-column'>
          <div className='quote'>
            <p className='quote-content'>"Платформа 'UnityHelp' є інноваційним інструментом,
              створеним з метою координації пошуку зниклих осіб в зонах військового конфлікту.</p>
          </div>
          <div className="find-lost2">
            <button className="search-button2">Повідомити про зниклого</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section12;
