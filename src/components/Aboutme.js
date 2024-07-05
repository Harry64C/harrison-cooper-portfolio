import resume from '../images/HarrisonCooperResume2024.pdf';
import ucr from '../images/ucr.png';

function Aboutme() {
  return (
    <div className = "main-content" id = "aboutme">

      {/* <h2>About Me</h2>
      <div className = "education" id = "extras">
            <ul>
              <li>I have been a committed member of many clubs throughout university including tennis, chess, and competitive coding.</li>
              <li>I've spent 2 years on the executive board of IEEE, one of my school's engineering clubs.</li>
              <li>I have been tutoring CS, Math and Physics part-time at my school's resource center since Sep. 2022</li>
              <li>I competed in a school hackathon and created a discord bot in 2022.</li>
            </ul>
      </div>
      <br></br> */}

      <h2>Education</h2>
      <div className = "education">
            <img src = {ucr} className = "school-logo" alt = "UCR"></img>
            <p>
              <b>B.S. in Computer Science</b><br></br><br></br>
               University of California, Riverside <br></br>
               Sep. 2020 - June 2024<br></br>
               GPA: 3.7 / 4.0
            </p>
      </div>

      <a href= {resume} target="_blank" title="Harrison Cooper Resume">Resume PDF</a>

    </div>

  );
}

export default Aboutme;