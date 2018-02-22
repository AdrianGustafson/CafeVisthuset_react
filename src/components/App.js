import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import agent from '../agent';

// Styles
import '../styles/App.css';
import '../styles/index.css';
import '../styles/Home.css';
import '../styles/Menu.css';
import '../styles/Calendar.css';

// Components
import About from './About';
import Bikes from './Bikes';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';


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

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div className="App">
          <Header
            appName={this.props.appName} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About}/>
            <Route path="/bikes" component={Bikes}/>
            <Route path="/login" component={Login}/>
          </Switch>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          Page could not be loaded...
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
