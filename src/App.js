import { Route, Switch } from 'react-router';
import { useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

const App = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => setNavToggle(!navToggle);

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/portfolio" exact component={PortfolioPage} />
            <Route path="/contact" exact component={ContactPage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
