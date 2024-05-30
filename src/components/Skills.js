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


function Skills() {
  return (
    <div className = "main-content">
      <h2>
        Technical Skills
      </h2>

      <p>
        <img src = {c} className = "logo"></img>
        <img src = {cpp} className = "logo"></img>
        <img src = {python} className = "logo"></img>
        <img src = {java} className = "logo"></img>
      </p>
      <p>
        <img src = {html} className = "logo"></img>
        <img src = {css} className = "logo"></img>
        <img src = {javascript} className = "logo"></img>
        <img src = {react} className = "logo"></img>
        <img src = {nodejs} className = "logo"></img>
      </p>
      <p>
        <img src = {mongodb} className = "logo"></img>
        <img src = {postgres} className = "logo"></img>
      </p>
            
    </div>

  );
}

export default Skills;