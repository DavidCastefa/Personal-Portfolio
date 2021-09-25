import React from "react";
import github from "../images/github-svgrepo-com.svg";
import heroku from "../images/heroku-svgrepo-com.svg";
import vercel from "../images/vercel-svgrepo-com.svg";
import netlify from "../images/netlify-svgrepo-com.svg";
import drIcon from "../images/DR-pics/DR-favicon.png";

let icon1;
let icon2;

const ShowPortfolio = ({ pfSelection, filter }) => {
  return (
    <div className="ShowPortfolio">
      {
        pfSelection.map( item => {
          switch (item.icon1) {
            case 'Github':
              icon1 = github;
              break;
            case 'Heroku':
              icon1 = heroku;
              break;
            case 'Vercel':
              icon1 = vercel;
              break;
            case 'Netlify':
              icon1 = netlify;
              break;
            case 'DR':
              icon1 = drIcon;
              break;
            default:
              icon1 = github;
          }
          switch (item.icon2) {
            case 'Github':
              icon2 = github;
              break;
            case 'Heroku':
              icon2 = heroku;
              break;
            default:
              icon2 = github;
          }

          return (
            <div className="portfolio-item" key={item.id}>
              <div className="image-data">
                <img src={item.image} alt ="" />
                <ul className="hover-items">
                  <li>
                    <a href={item.appUrl} target="_blank" rel="noreferrer">
                      See app 
                      <img src={icon1} alt="" />
                    </a>
                    <a href={item.codeUrl} target="_blank" rel="noreferrer">
                      See code  
                      <img src={icon2} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <a href={item.appUrl} target="_blank" rel="noreferrer">{item.title}</a>
              <p className="date">{item.date}</p>
              <p className="text">{item.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowPortfolio;