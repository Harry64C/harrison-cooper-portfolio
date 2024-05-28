import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';


import Navbr from './components/Navbr.js'
import Aboutme from './components/Aboutme.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Skills from './components/Skills.js'


function App() {
  return (
    <div className="App">
      

      <header className="App-header">


        <Navbr></Navbr>

        <Header></Header>

        
        <Container>

          <Projects></Projects>

          <Skills></Skills>

          <Aboutme></Aboutme>


        </Container>
        
        <Footer></Footer>

      </header>
    </div>
  );
}

export default App;
