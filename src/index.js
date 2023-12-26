import React from 'react';
import  ReactDOM  from 'react-dom';
import './style.css'
import Header from './components/Header';
import Footer from './Footer';
import Content from './components/Content';




function App() {
    return (
      <div className='container'>
        <div className='bordered-container'>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
 