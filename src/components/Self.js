import selfPortrait from '../images/Self_portrait.jpg';


function Self() {
  return (
    <div className = "main-content">
      <h1>
        Hello, I'm Harrison Cooper. I'm an aspiring software engineer who has skills in
        programming, web development, and database management. 
      </h1>

      <img src={selfPortrait} className = "profile-img" alt="Photo of Harrison"/>

    </div>

  );
}

export default Self;