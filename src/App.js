import React from 'react';
import './App.css';
import Header from './components/Header';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default App;
