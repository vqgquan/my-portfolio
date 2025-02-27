import React from "react";
import "bootstrap";
import { NavLink } from 'react-router-dom'

const Header = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className=" navbar-collapse row" id="navbarText">
      <ul className="navbar-nav">
        <li className="col-4">
          <NavLink className="nav-link" activeClassName="active"  to="/home">
            Home
          </NavLink>
        </li>
        <li className="col-4">
          <NavLink className="nav-link" activeClassName="active" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className="col-4">
          <NavLink className="nav-link" activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
