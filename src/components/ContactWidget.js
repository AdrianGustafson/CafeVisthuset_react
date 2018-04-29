import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
import Recaptcha from 'react-recaptcha';

import ListErrors from './ListErrors';
import { messages } from '../messages';
import { recaptcha_site_key as sitekey } from '../../public/assets/keys';

import agent from '../agent';

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (name, email, message) =>
    dispatch({ type: 'SEND_CONTACT_EMAIL', payload: agent.Email.contact(name, email, message) })
})

class ContactWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      verified: true,
      sent: false
    }

    this.verifyCallback = ( response ) => {
      if (response) {
        this.setState({ verified: true })
      }
    }
    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    }

    this.onSubmit = ev => {
      ev.preventDefault();
      const state = Object.assign({}, this.state);

      if (state.verified) {
        this.props.onSubmitForm(state.name, state.email, state.message)
        this.setState({sent: true });
      }

    }
  }

  render(){
    const WidgetMessages = defineMessages({
      title: {
        id: 'app.footer.contact.title',
        defaultMessage: 'Kontakta oss'
      },
      thanks: {
        id: 'app.footer.contact.thanks',
        defaultMessage: 'Tack för att du hör av dig till oss! Vi återkommer inom kort med svar.'
      }
    })
    const { formatMessage } = this.props.intl;
    if (this.state.sent) {
      return(
        <div className="contact-widget borded col-xs-12 col-md-4 mt-3 mt-md-0">
          <h2>{formatMessage(WidgetMessages.title)}</h2>
          <p className="contact-widget__text">{formatMessage(WidgetMessages.thanks)}</p>
        </div>
      )
    }
    else {
      let recaptchainstance;
      return (
        <div className="contact-widget borded col-xs-12 col-md-4 mt-3 mt-md-0">
          <h2>{formatMessage(WidgetMessages.title)}</h2>

          <form onSubmit={this.onSubmit}>
            <ListErrors errors={this.state.errors} />
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.name}
                  onChange={this.updateState('name')}
                  placeholder={formatMessage(messages.name)}
                  required
                />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="email"
                  onChange={this.updateState('email')}
                  value={this.state.email}
                  placeholder={formatMessage(messages.email)}
                  required
                />
              </fieldset>

              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  value={this.state.message}
                  onChange={this.updateState('message')}
                  placeholder={formatMessage(messages.message)}
                />
              </fieldset>

              <fieldset className="form-group">
                <button
                  className="visthuset-primary btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={this.state.inProgress}
                  >
                  {formatMessage(messages.send)}
                </button>
              </fieldset>

            </fieldset>
          </form>
        </div>
      )
    }
  }
}
/*
<fieldset className="form-group">
  <Recaptcha
    ref={e => recaptchainstance = e }
    sitekey={sitekey}
    render="onload"
    onloadCallback={this.verifyCallback}
    verifyCallback={this.verifyCallback}
  />
</fieldset>
*/
export default connect(()=>({}), mapDispatchToProps)(injectIntl(ContactWidget));
