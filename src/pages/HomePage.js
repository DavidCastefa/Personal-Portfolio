import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../images/left-arrow-svgrepo-com.svg";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am&nbsp;
          <span>David Rhoton</span>
        </h1>
        <p className="h-sub-text">
          a JavaScript software developer.<br />
          Currently, I'm focusing on using the React and Redux frameworks to build web apps.<br />
          For example, this page was built from scratch using HTML, SASS/CSS, JavaScript and React.<br />
          <img src={leftArrow} alt="" />Use the sidebar navigation for more info about me.<br />
          <small>(If not in view, the bars on the upper right will toggle in/out.)</small>
        </p>
        <div className="icons">
          <Link 
            to={{ pathname: "https://www.linkedin.com/in/davidrhoton"}} 
            target="_blank"
            rel="noreferrer"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </Link>
          <Link 
            to={{ pathname: "https://github.com/DavidCastefa"}}
            target="_blank"
            rel="noreferrer"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default HomePage;