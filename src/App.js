
import './App.css';



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
// import Main from './Main';
import Cont from './navpage/Cont';
import Main from './Main';


function App() {
  return (
    <div className="App">
  <Main></Main>
    </div>
  );
}

export default App;
