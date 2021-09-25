import React from "react";
import avatar from '../images/DR-pics/NG-DR-avatar.jpg'
import { NavLink } from "react-router-dom";
import copyright from "../images/copyright-svgrepo-com.svg";

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="avatar" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p><img src={copyright} alt="" /> 2021 David Rhoton</p>
        </footer>
      </nav>
    </div>
  )
}

export default NavBar;