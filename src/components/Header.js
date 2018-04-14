import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';
import { defineMessages, injectIntl } from 'react-intl';
import { pages } from '../messages';

import store from '../store';

const langs = {
  'sv': 'Svenska',
  'en': 'English',
  'de': 'Deutsch',
  'no': 'Norsk'
}

const SwitchLocale = connect(state => ({
  currentLocale: state.intl.locale,
  locales: state.locales,
}))(({ currentLocale, locales }) => (
  <div className="btn-group" role="group">
    <button
      className="btn"
      type="button"
      onClick={e =>
        store.dispatch(
          updateIntl({
            locale: 'sv',
            messages: locales['sv'],
          })
        )}>
      <span className="flag-icon flag-icon-sv"></span>
    </button>
    <button
          className="btn"
          type="button"
          onClick={e =>
            store.dispatch(
              updateIntl({
                locale: 'en',
                messages: locales['en'],
              })
            )}>
      <span className="flag-icon flag-icon-en"></span>
    </button>
  </div>
))

class Header extends React.Component {

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName='active'>
                  {formatMessage(pages.home.name)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/menu"
                  className="nav-link"
                  activeClassName='active'>
                  {formatMessage(pages.menu.name)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/bikes"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(pages.bikes.name)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/packages"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(pages.packages.name)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(pages.events.name)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(pages.about.name)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(pages.contact.name)}
                </NavLink>
              </li>
            </ul>
          </div>
          <SwitchLocale
            className="push-md-right"/>
        </nav>
      </div>
    );
  }
}

export default injectIntl(Header);
