import React from "react";
import about from '../images/DR-pics/NG-DR-at-work.jpg'
import dkrCV from '../David-Rhoton-CV-2021.pdf'

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="office" />
      </div>
      <div className="about-info">
        <h4>I am<span> David</span></h4>
        <p className="about-text">
          Originally trained as a naval architect and after dedicating several years to teaching and coaching,
          I am now focusing on software development, especially JavaScript and the React-Redux frameworks.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>       
            <p>Current Address</p>       
            <p>Countries</p>                        
          </div>
          <div className="right-section">
            <p>: David Rhoton</p>
            <p>: 55</p>  
            <p>: USA / Spain</p>  
            <p>: English, German, Spanish, Catalan</p>  
            <p>: Castelldefels, Spain</p>  
            <p>: USA, Germany, Austria, Spain</p>                 
          </div>
        </div>
        <form method="get" action={dkrCV}>
          <button className="cv-btn" type="submit">Download CV (Résumé)</button>
        </form>
      </div>
    </div>
  )
}

export default ImageSection;