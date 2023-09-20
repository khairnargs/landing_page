import React from 'react';
import './App.css';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import Home from './home';
import About from './about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <router>
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
        <Home/>
        <About/>
        </> 
        </header>  
        <Switch>
        <Route path="./about">
            <About />
          </Route>
          <Route path="./home">
            <Home />
          </Route>  
          </Switch>
    </div>

    </router>
  );
}

export default App;

/*import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Nav from './nav/Nav';
import Footer from './footer/Footer';



function App() {
  return (

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
    </div>
    
  );
}

export default App;*/