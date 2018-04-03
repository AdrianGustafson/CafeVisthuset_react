import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import agent from '../agent';

// Styles
import '../styles/App.css';
import '../styles/Bikes.css';
import '../styles/Calendar.css';
import '../styles/index.css';
import '../styles/Flags.css';
import '../styles/Footer.css';
import '../styles/Home.css';
import '../styles/Header.css';
import '../styles/Menu.css';
import '../styles/Packages.css';


// Components
import NotFound from './NotFound';
import About from './About';
import Bikes from './Bikes';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import Package from './Packages/Package';
import Packages from './Packages';
import Register from './Register';

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
     dispatch({ type: 'APP_LOAD', payload, token }),
  onRedirect: () =>
     dispatch({ type: 'REDIRECT' })
});

class App extends Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      console.log(this.props);
      return (
        <div className="App">
          <Header
            appName={this.props.appName} />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route path="/about" component={About}/>
            <Route path="/bikes" component={Bikes}/>
            <Route path="/login" component={Login}/>
            <Route path="/menu" component={Menu} />
            <Route exact path="/packages" component={Packages} />
            <Route path="/packages/:slug" component={Package} />
            <Route path="/register" component={Register} />
            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <FormattedMessage
            id='app.loading'
            defaultMessage='Loading app...' />
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
