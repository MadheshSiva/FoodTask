import React from 'react';
import Header from './header/Header';
import './App.css';
import Footer from './Footer/footer';
import Main from './main/main';

function App() {
  return (
    <div className="App">
    <Header/>
    <div>
      <Main />
    </div>
    <div className='absolute bottom-0 w-full bg-black'>
      <Footer/>
    </div>
    </div>
    
  );
}

export default App;
