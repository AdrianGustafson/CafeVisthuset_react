import React from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import ListErrors from '../ListErrors';
import ModalWrapper from '../ModalWrapper';
import { messages } from '../../messages';

const mapStateToProps = state => ({
  currentLocale: state.common.locale
})

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    const payload = ''
    dispatch({type: 'SUBMIT_PACKAGE_FORM', payload})
  }
})

class PackageBookingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      start_date: new Date(),
      end_date: new Date(),
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value })
      this.setState(newState);
    };

    this.onChangeDate = date => {
      const start_date = date[0];
      const end_date = date[1];
      this.setState({start_date, end_date});
    };

    this.onToggleCheckbox = field => ev => {
      const state = this.state
      const newState = Object.assign({}, state, {[field]: !ev.target.value});
      this.setState(newState)
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const state = Object.assign({}, this.state);
      //this.props.onSubmitForm(state);
      console.log(state);
    };
  }
  render() {
    const dates = [this.state.start_date, this.state.end_date];
    const { formatMessage } = this.props.intl;

    const formMessages = defineMessages({
      personalTitle: {
        id: 'package.booking.form.personalTitle',
        defaultMessage: 'Personuppgifter'
      }
    })
    return (
      <div className="col-xs-12 col-md-4 package-form borded">
        <h1>{formatMessage(messages.book_here)}!</h1>
        <ListErrors errors={this.props.errors} />
        <form onSubmit={this.submitForm}>
          <fieldset>
            <fieldset className="form-group">
              <Calendar
                onChange={this.onChangeDate}
                locale={this.props.currentLocale}
                value={dates}
                showNavigation={true}
                selectRange={true}
              />
            </fieldset>

            <fieldset>
                <legend className="rental-form__legend">{formatMessage(formMessages.personalTitle)}:</legend>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder={formatMessage(messages.first_name)}
                  value={this.state.first_name}
                  onChange={this.updateState('first_name')} />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder={formatMessage(messages.last_name)}
                  value={this.state.last_name}
                  onChange={this.updateState('last_name')} />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="tel"
                  placeholder={formatMessage(messages.phone_number)}
                  value={this.state.phone_number}
                  onChange={this.updateState('phone_number')} />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder={formatMessage(messages.email)}
                  value={this.state.email}
                  onChange={this.updateState('email')} />
              </fieldset>

              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder={formatMessage(messages.message)}
                  value={this.state.message}
                  onChange={this.updateState('message')}>
                </textarea>
              </fieldset>

              <fieldset className="form-group">
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={this.state.newsletter}
                      value={this.state.newsletter}
                      onChange={this.onToggleCheckbox('newsletter')} />
                    {formatMessage(messages.newsletter)}?
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="terms"
                      required />
                    <FormattedMessage
                      id={'bikes.booking.form.terms'}
                      defaultMessage={'Jag har läst och accepterar {button}'}
                      values={{button: <button
                        className="btn btn-link modal-button-link"
                        type="button"
                        data-toggle="modal"
                        data-target="#bike-rental-terms">
                        <FormattedMessage
                          id="bikes.booking.forms.terms.terms"
                          defaultMessage="bokningsvillkoren" />
                        </button>}}
                     />
                    <ModalWrapper id="BIKE_RENTAL_TERMS" />
                  </label>
                </div>
                <span><button
                  className="btn btn-link"
                  type="button"
                  data-toggle="modal"
                  data-target="#privacy-policy">
                  {formatMessage(messages.privacy)}
                </button></span>
                <ModalWrapper id="PRIVACY_POLICY" />
              </fieldset>
            </fieldset>

            <fieldset className="form-group">
              <button
                className="visthuset-primary btn btn-lg btn-primary pull-xs-right"
                type="submit"
                onClick={this.onSubmit}>
                {formatMessage(messages.book)}
              </button>
            </fieldset>
        </fieldset>
      </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(PackageBookingForm));
