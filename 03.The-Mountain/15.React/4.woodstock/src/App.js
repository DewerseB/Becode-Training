import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from './components';
import Routes from './routes/routes';

function App() {
  return (
    <Router>
        <Header/>
        <Routes/>
        <Footer/>
    </Router>
  );
}

export default App;
