import resume from '../images/HarrisonCooperResume2024.pdf';


function Aboutme() {
  return (
    <div className = "main-content">
      <h1>About me</h1>
      <hr></hr>

      <h2>Education</h2>
      <hr></hr>

      <p>University of California, Riverside Sep. 2020 - June 2024</p>
      <p>B.S. in Computer Science</p>
      <p>● GPA: 3.7 / 4.0</p>
      <p>● Vice Chair of IEEE (Institute of Electrical and Electronics Engineers)</p>


      <a href= {resume} target="_blank" title="Harrison Cooper Resume">Open PDF</a>

    </div>

  );
}

export default Aboutme;