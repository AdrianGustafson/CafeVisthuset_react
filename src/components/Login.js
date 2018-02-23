import React from 'react';
import { Redirect } from 'react-router-dom';

import agent from '../agent';
import { connect } from 'react-redux';

import ListErrors from './ListErrors';

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password,
    currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onSubmit: (email, password) =>
    dispatch({ type: 'LOGIN', payload: agent.Auth.login(email, password) })
});

class Login extends React.Component {
  constructor() {
    super();
    this.onChangeEmail = event => this.props.onChangeEmail(event.target.value);
    this.onChangePassword = event => this.props.onChangePassword(event.target.value);
    this.submitForm = (email, password) => event => {
      event.preventDefault();
      this.props.onSubmit(email, password);
    };
    localStorage.clear()
  }
  render() {
    const { email, password, currentUser } = this.props;
    if (currentUser) {
      return <Redirect to="/" />;
    }

    return (
      <div className="">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Logga in</h1>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(email, password)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Epost"
                      value={email}
                      onChange={this.onChangeEmail} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Lösenord"
                      value={password}
                      onChange={this.onChangePassword} />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Logga in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
