import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-4 header">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            <div>
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;