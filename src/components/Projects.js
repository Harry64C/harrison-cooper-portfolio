import Container from 'react-bootstrap/Container';
import Chess from './Chess.js'

import c from '../images/logos/C_logo.png'
import cpp from '../images/logos/cpp_logo.png'
import css from '../images/logos/css_logo.png'
import html from '../images/logos/html_logo.png'
import java from '../images/logos/java_logo.png'
import javascript from '../images/logos/javascript.png'
import mongodb from '../images/logos/mongodb_logo.png'
import nodejs from '../images/logos/nodejs_logo.png'
import postgres from '../images/logos/postgres_logo.png'
import python from '../images/logos/python_logo.png'
import react from '../images/logos/react_logo.png'


function Projects() {
  return (
    <div className = "main-content" id = "projects">
      <h1>Projects</h1>

      {/* <Chess></Chess> */}


      <div className = "project" id = "air-quality">
        <h2>Air Analysis</h2>
        <p>
          Made With: <img src = {python} alt = "python"  className = "proj-logo"></img> <img src = {postgres} alt = "postgres"  className = "proj-logo"></img>
          <img src = {html} className = "proj-logo"></img><img src = {css} className = "proj-logo"></img><img src = {nodejs} className = "proj-logo"></img> <br></br>
          Website built to improve real people’s access to air quality information. My group takes
           raw sensor data from strategically placed monitors around the Salton Sea area then
          process and display it in generated tables, graphs, and maps.
        </p>
        <a href = "https://github.com/UCR-Senior-Design/course-project-air-police.git" target="_blank" rel="noreferrer">
          <button className = "button-gitrepo">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" className = "small-logo"></img>
            GitHub
          </button>
        </a>
        <a href = "https://course-project-air-police-eight.vercel.app/" target="_blank" rel="noreferrer">
          <button className = "button-gitrepo">
            Website Link
          </button>
        </a>
      </div>

      <div className = "project" id = "warehouse">
        <h2>Amazon-Warehouse</h2>
        <p>
          Made With: <img src = {java} alt = "java"  className = "proj-logo"></img><img src = {postgres} alt = "postgres"  className = "proj-logo"></img> <br></br>
          DBMS course project where I created a basic “Amazon website” with a teammate.
          Used Postgresql to manage the supply logistics and Java for the user interface.        </p>
        <a href = "https://github.com/Harry64C/Amazon-Warehouse.git" target="_blank" rel="noreferrer">
          <button className = "button-gitrepo">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" className = "small-logo"></img>
            GitHub
          </button>
        </a>
      </div>


      <div className = "project" id = "webmart">
        <h2>Webmart</h2>
        <p>
          Made With: <img src = {nodejs} className = "proj-logo"></img> <img src = {html} className = "proj-logo"></img>
          <img src = {css} className = "proj-logo"></img><img src = {mongodb} className = "proj-logo"></img> <br></br>
          Group project where we developed a website allowing users to list and purchase items. Inspired by Ebay, users could even log in, create accounts, and buy items.
        </p>
        <a href = "https://github.com/ellenyim8/WebMart.git" target="_blank" rel="noreferrer">
          <button className = "button-gitrepo">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" className = "small-logo"></img>
            GitHub
          </button>
        </a>
      </div>

      <div className = "project" id = "Sustainability-Bot">
        <h2>Sustainability-Bot</h2>
        <p>
          Made With: <img src = {python} alt = "python"  className = "proj-logo"></img> <br></br>          
          12 hour Hackathon project in which my team of 4 created a discord bot themed around sustainability.
          We used Python to code the bot and implemented functionality with a discord API. 
        </p>
        <a href = "https://github.com/Niikkc/Sust-Bot" target="_blank" rel="noreferrer">
          <button className = "button-gitrepo">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" className = "small-logo"></img>
            GitHub
          </button>
        </a>
      </div>

      <div className = "project" id = "compiler-app">
        <h2>Compiler-APP</h2>
        <p>
          Made With: <img src = {c} className = "proj-logo"></img><img src = {cpp} className = "proj-logo"></img> <br></br>          
          Collaborated with a team of 3 to design and build a working compiler from the ground up.
          Used C to implement concepts such as Lexical Analysis, Parsing, and Code Generation.
        </p>
        <a href = "https://github.com/Harry64C/CS_152_Compiler_Project.git" target="_blank" rel="noreferrer">
          <button className = "button-gitrepo">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" className = "small-logo"></img>
            GitHub
          </button>
        </a>
      </div>

      <div className = "project" id = "ai-feature-selection">
        <h2>AI Feature Selection</h2>
        <p>
          Made With: <img src = {python} alt = "python"  className = "proj-logo"></img> <br></br>          
          Created a greedy-search algorithm that uses Machine Learning to determine which features will provide the most accuracy when classifying a given dataset. 
          I used Python libraries to assist with computing accuracy in n-dimensional space. 
        </p>
        <a href = "https://github.com/Harry64C/AI_Feature_Selection.git" target="_blank" rel="noreferrer">
          <button className = "button-gitrepo">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" className = "small-logo"></img>
            GitHub
          </button>
        </a>
      </div>




    </div>

  );
}

export default Projects;