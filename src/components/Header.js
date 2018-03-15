import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';
import { defineMessages, injectIntl } from 'react-intl';

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

    const messages = defineMessages({
      menu: {
        id: "nav.menu",
        defaultMessage: 'Meny'
      },
      home: {
        id: "nav.home",
        defaultMessage: 'Hem'
      },
      bikes: {
        id: 'nav.bikes',
        defaultMessage: 'Cykeluthyrning'
      },
      'packages': {
        id: 'nav.packages',
        defaultMessage: 'Paketupplevelser'
      },
      'events': {
        id: 'nav.events',
        defaultMessage: 'Evenemang'
      },
      about: {
        id: 'nav.about',
        defaultMessage: 'Om oss'
      },
      contact: {
        id: 'nav.contact',
        defaultMessage: 'Kontakt'
      }
    });

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
                  {formatMessage(messages.home)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/menu"
                  className="nav-link"
                  activeClassName='active'>
                  {formatMessage(messages.menu)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/bikes"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(messages.bikes)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/packages"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(messages.packages)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(messages.events)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(messages.about)}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active">
                  {formatMessage(messages.contact)}
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
