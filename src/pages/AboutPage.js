import React from "react";
import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import Title from "../components/Title";
import jsIcon from "../images/javascript-svgrepo-com.svg";
import reactLogo from "../images/react-svgrepo-com.svg";
import webDesign from "../images/web-design-svgrepo-com.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={'About me'} span={'About Me'} />
      <ImageSection />

      <div className="skills-section">
        <Title title={'My Skills'} span={'My Skills'} />
        <h3 className="skill-subsection">Software Development:</h3>
        <div className="skills-container">
          <SkillsSection skill={'JavaScript'} progress={'70%'} />
          <SkillsSection skill={'Node.js'} progress={'50%'} />
          <SkillsSection skill={'React and Redux'} progress={'50%'} />
          <SkillsSection skill={'MongoDB and Mongoose'} progress={'50%'} />
          <SkillsSection skill={'Express'} progress={'30%'} />
        </div>
        <h3 className="skill-subsection">Teamwork:</h3>
        <div className="skills-container">
          <SkillsSection skill={'Teaching'} progress={'90%'} />
          <SkillsSection skill={'Communication and support'} progress={'85%'} />
          <SkillsSection skill={'International Relations'} progress={'85%'} />
          <SkillsSection skill={'Adaptability'} progress={'85%'} />
          <SkillsSection skill={'Leadership'} progress={'80%'} />
          <SkillsSection skill={'Public speaking'} progress={'80%'} />
        </div>
        <h3 className="skill-subsection">Languages:</h3>
        <div className="skills-container">
          <SkillsSection skill={'English'} progress={'90%'} />
          <SkillsSection skill={'German'} progress={'80%'} />
          <SkillsSection skill={'Spanish'} progress={'80%'} />
          <SkillsSection skill={'Catalan'} progress={'70%'} />
        </div>
      </div>

      <Title title={'Services'} span={'Services'} />
      <div className="services-container">
        <ServicesSection 
          image={jsIcon} 
          title={'JavaScript'} 
          text={'Development of frontend and backend software using JavaScript'} 
        />
        <ServicesSection 
          image={reactLogo} 
          title={'React Apps'} 
          text={'Building web apps using React and Redux frameworks'} 
        />
        <ServicesSection 
          image={webDesign} 
          title={'Web Design'} 
          text={'General web design for desktops and mobiles'} 
        />
      </div>
    </div>
  )
}

export default AboutPage;