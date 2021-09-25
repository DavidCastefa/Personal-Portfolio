import jsCalculator from "../images/portfolio-pics/JS-Calculator.jpg";
import drumMachine from "../images/portfolio-pics/Drum-Machine.jpg";
import pomodoro from "../images/portfolio-pics/Pomodoro-Clock.jpg";
import heatMap from "../images/portfolio-pics/D3-Heat-Map.jpg";
import choropleth from "../images/portfolio-pics/D3-Choropleth-Map.jpg";
import apisMicroservices from "../images/portfolio-pics/APIs-and-Microservices.jpg";
import sudokuSolver from "../images/portfolio-pics/Sudoku-Solver.jpg";
import amBrTranslator from "../images/portfolio-pics/American-British-Translator.jpg";
import youtubeHooks from "../images/portfolio-pics/YouTube React-Hooks Screenshot.png";
import songDetails from "../images/portfolio-pics/Song Details.png";
import portfolioPic from "../images/portfolio-pics/Portfolio.png";

// update with newest on top and (increment top id)
const portfolio = [
  {
    id: 11,
    categories: ['React', 'JavaScript'],
    appUrl: 'http://www.davidrhoton.com',
    codeUrl: 'https://github.com/DavidCastefa/Personal-Portfolio',
    icon1: 'DR',
    icon2: 'Github',
    image: portfolioPic,
    title: 'My Personal Portfolio',
    text: "This website you're on now built from scratch using HTML, SASS/CSS, JavaScript and React.\nBased on a YouTube tutorial by MacLinz.",
    date: '2021 September 25'
  },
  {
    id: 10,
    categories: ['React', 'Redux', 'JavaScript'],
    appUrl: 'https://naughty-euclid-404650.netlify.app/',
    codeUrl: 'https://github.com/DavidCastefa/React-Redux-Song-Details',
    icon1: 'Netlify',
    icon2: 'Github',
    image: songDetails,
    title: 'Song Details',
    text: 'A practice app for using React and Redux for the course "Modern React and Redux" by Stephen Grider at Udemy.',
    date: '2021 August 24'
  },
  {
    id: 9,
    categories: ['React', 'React-Hooks', 'Axios', 'JavaScript'],
    appUrl: 'https://videos-hooks-eight-theta.vercel.app/',
    codeUrl: 'https://github.com/DavidCastefa/React_Course_YouTube_App',
    icon1: 'Vercel',
    icon2: 'Github',
    image: youtubeHooks,
    title: 'YouTube Search',
    text: 'A simple web app that uses React-Hooks and Axios to search and display selected videos.\nOne of the class projects for the course "Modern React and Redux" by Stephen Grider at Udemy.',
    date: '2021 August 22'
  },
  {
    id: 8,
    categories: ['Chai', 'Mocha', 'Express', 'JavaScript'],
    appUrl: 'https://fcc-qa-american-british-transl.herokuapp.com/',
    codeUrl: 'https://github.com/DavidCastefa/FCC_QA_American_British_English_Translator',
    icon1: 'Heroku',
    icon2: 'Github',
    image: amBrTranslator,
    title: 'American British English Translator',
    text: 'A web app based on Javascript and Express and using Chai and Mocha for internal testing.\nFor the freeCodeCamp course "Quality Assurance".',
    date: '2021 August 11'
  },
  {
    id: 7,
    categories: ['Chai', 'Mocha', 'Express', 'JavaScript'],
    appUrl: 'https://fcc-qa-soduku-solver-dkrt.herokuapp.com/',
    codeUrl: 'https://github.com/DavidCastefa/FCC_QA_Sudoku_Solver',
    icon1: 'Heroku',
    icon2: 'Github',
    image: sudokuSolver,
    title: 'Sudoku Solver',
    text: 'Another web app based on Javascript and Express and using Chai and Mocha for internal testing.\nFor the freeCodeCamp course "Quality Assurance".',
    date: '2021 August 07'
  },
  {
    id: 6,
    categories: ['MongoDB', 'Mongoose', 'Express', 'JavaScript'],
    appUrl: 'https://fcc-apis-projects-dkr.herokuapp.com/',
    codeUrl: 'https://github.com/DavidCastefa/FCC_APIs_and_Microservices_Projects',
    icon1: 'Heroku',
    icon2: 'Github',
    image: apisMicroservices,
    title: 'APIs and Microservices',
    text: 'All 5 projects for the freeCodeCamp course "APIs and Microservices" combined together into one.\nBased on JavaScript, MongoDB, Mongoose and Express.',
    date: '2021 July 10'
  },  
  {
    id: 5,
    categories: ['D3', 'JavaScript'],
    appUrl: 'https://davidcastefa.github.io/FCC_D3_Choropleth-Map/',
    codeUrl: 'https://github.com/DavidCastefa/FCC_D3_Choropleth-Map',
    icon1: 'Github',
    icon2: 'Github',
    image: choropleth,
    title: 'D3 Choropleth Map',
    text: 'Choropleth Map of the USA built with JavaScript and D3.\nA project for the freeCodeCamp course "Data Visualization Certification".',
    date: '2021 June 18'
  },
  {
    id: 4,
    categories: ['D3', 'JavaScript'],
    appUrl: 'https://davidcastefa.github.io/FCC_D3_Heat_Map/',
    codeUrl: 'https://github.com/DavidCastefa/FCC_D3_Heat_Map',
    icon1: 'Github',
    icon2: 'Github',
    image: heatMap,
    title: 'D3 Heat Map',
    text: 'Global Land Surface Temperature Heat Map built with JavaScript and D3.\nAnother project for the freeCodeCamp course "Data Visualization Certification".',
    date: '2021 June 15'
  },
  {
    id: 3,
    categories: ['React', 'JavaScript'],
    appUrl: 'https://davidcastefa.github.io/FCC-25-5-Pomodoro-Clock/',
    codeUrl: 'https://github.com/DavidCastefa/FCC-25-5-Pomodoro-Clock',
    icon1: 'Github',
    icon2: 'Github',
    image: pomodoro,
    title: 'Pomodoro Clock',
    text: 'A pomodoro clock based on JavaScript and React for the freeCodeCamp course "Front End Development Libraries".',
    date: '2021 June 01'
  },
  {
    id: 2,
    categories: ['React', 'JavaScript'],
    appUrl: 'https://davidcastefa.github.io/FCC-Drum-Machine/',
    codeUrl: 'https://github.com/DavidCastefa/FCC-Drum-Machine',
    icon1: 'Github',
    icon2: 'Github',
    image: drumMachine,
    title: 'Drum Machine',
    text: 'A very simple drum app based on JavaScript and React for the freeCodeCamp course "Front End Development Libraries".',
    date: '2021 April 14'
  },
  {
    id: 1,
    categories: ['JavaScript', 'Bootstrap'],
    appUrl: 'https://davidcastefa.github.io/FCC-JavaScript-Calculator/',
    codeUrl: 'https://github.com/DavidCastefa/FCC-JavaScript-Calculator',
    icon1: 'Github',
    icon2: 'Github',
    image: jsCalculator,
    title: 'JavaScript Calculator',
    text: 'A simple online calculator based on JavaScript and Bootstrap for the freeCodeCamp course "Front End Development Libraries".',
    date: '2021 June 01'
  },
]

export default portfolio;