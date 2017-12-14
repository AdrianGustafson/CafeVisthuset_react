import { NavLink, Link } from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">

          <Link to="/" className="navbar-brand h1">
            {this.props.appName.toLowerCase()}
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink
                  to="/menu"
                  className="nav-link"
                  activeClassName='active'>
                  Meny
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active">
                  Cykeluthyrning
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active">
                  Paketupplevelser
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active">
                  Evenemang
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active">
                  Om oss
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active">
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    );
  }
}

export default Header;
