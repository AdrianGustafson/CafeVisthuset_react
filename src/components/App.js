import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

// Styles
import '../styles/App.css';
import '../styles/index.css';
import '../styles/Home.css';

// Components
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';


const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
     dispatch({ type: 'APP_LOAD', payload }),
  onRedirect: () =>
     dispatch({ type: 'REDIRECT' })
});

class App extends Component {
  componentWillMount() {
    this.props.onLoad();
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
