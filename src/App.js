import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';


import Navbr from './components/Navbr.js'
import Aboutme from './components/Aboutme.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import Self from './components/Self.js'

function App() {
  return (
    <div className="App">
      

      <header className="App-header">


        <Navbr></Navbr>
        
        <Container>

          <Self></Self>

          <Projects></Projects>

          <Aboutme></Aboutme>


        </Container>
        
        <Footer></Footer>

      </header>
    </div>
  );
}

export default App;
