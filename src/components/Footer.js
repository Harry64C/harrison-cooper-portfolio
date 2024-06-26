
import linkedin from '../images/logos/linkedin.png'


function Footer() {
  return (
    <footer>
      <div className = "footer" id = "footer">
        <h3>Contact</h3>


          <a href = "mailto:harrisoncooper02@icloud.com" target = "__blank" rel="noreferrer">
            <p><u>harrisoncooper02@icloud.com</u></p>
          </a>

          <a href = "https://linkedin.com/in/harrison-cooper-75a627230" target = "__blank" rel="noreferrer">
            <img src = {linkedin} className = "proj-logo" alt = "linkedin"></img>
            Linkedin
          </a>
          <a href = "https://github.com/Harry64C" target = "__blank" rel="noreferrer">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" className = "small-logo" alt = "github"></img>
            GitHub
          </a>



      </div>
    </footer>
    

  );
}

export default Footer;