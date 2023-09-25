import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import './App.css';
import Home from './home';
import About from './about';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <>
       <Nav/>
       
              <br></br><br></br><br></br>
        <h1>Welcome to Techox LLP Internship Program</h1>
        <p>Unlock Your Potential with Us!</p>
               
        <a
          className="App-link"
          href="https://www.techox.co.in/#section-highlight"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Get Started
        </a>
        <Footer/>
        </> 
        </header> 
  <Routes>
    <Route path=".\about.js" element={<About />} />
    <Route path=".\home.js" element={<Home />} />
  </Routes>
  </div>
 
  </Router>
  );
}
export default App;