import selfPortrait from '../images/Self_portrait.jpg';
import banner from '../images/banner.jpeg'

function Header() {
  return (
    <div className = "header" id = "home">

      <img src={banner} className = "banner" alt="banner"/>
      
      {/* <img src={selfPortrait} className = "profile-img" alt="Photo of Harrison"/>

      <h1>
        Hello, I'm Harrison Cooper. I'm an aspiring software engineer who has experience in
        programming, web development and database management. 
      </h1> */}

    </div>

  );
}

export default Header;