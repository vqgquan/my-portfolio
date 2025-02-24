import React from "react";
import "bootstrap";
import { NavLink } from 'react-router-dom'

const Header = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" activeClassName="active"  to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
