import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  return (
    <div className = "main-content">
      <h1>Projects</h1>
      <hr></hr>

      <p>
        The purpose of this project is to improve people’s access to air quality information. We
        take raw sensor data from strategically placed monitors around the Salton Sea area then
        process and display it on a website created for the project.
      </p>
      <p>
        Data visualization is done using Python scripts after making API calls in Python.
      </p>
      <p>
        I developed most of the front-end elements with html / css and created a dashboard that is
        populated by queries to our SQL database
      </p>

    </div>

  );
}

export default Projects;