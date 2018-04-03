import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';

import Calendar from 'react-calendar';

import agent from '../../agent';
import ListErrors from '../ListErrors';
import ModalWrapper from '../ModalWrapper';

import { messages } from '../../messages';

const mapStateToProps = state => ({
  ...state.booking,
  currentLocale: state.intl.locale
})

const mapDispatchToProps = dispatch => ({

})

const BikeRentalField = ({ type, amount }) => {
  const selectType = ev => {
    console.log(ev.target.value);
  }
  return (
    <div className="input-group">
      <div className="input-group-btn">
        <select className="rental-select" onChange={this.selectType}>
          <option value="adult">Vuxen</option>
          <option value="young">Ungdom 12-15 år</option>
          <option value="child">Barn 8-12 år</option>
          <option value="small_child">Barn 6-8 år</option>
        </select>
      </div>
      <input
        type="number"
        className="form-control"
        value={amount}
        placeholder="Antal..."
      />
    </div>
  );
}

class BikeRentalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      start_date: new Date(),
      end_date: new Date(),
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      message: '',
      newsletter: true,
      bikes: {
        adult:0,
        young:0,
        child:0,
        small_child:0
      },
      extras: {
        child_seats: 0,
        bike_trailers: 0,
        lunches: []
      }
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value })
      this.setState(newState);
    };

    this.updateSubState = (object, field) => ev => {
      const state = this.state;
      state[object][field] = ev.target.value;
      const newState = Object.assign({}, state)
      this.setState(newState);
    }
    this.onChangeDate = date => {
      const start_date = date[0];
      const end_date = date[1];
      this.setState({start_date, end_date});
    };

    this.onToggleCheckbox = field => ev => {
      const state = this.state
      const newState = Object.assign({}, state, {[field]: !ev.target.value});
      this.setState(newState)
    }

    this.submitForm = ev => {
      ev.preventDefault();
      const state = Object.assign({}, this.state);
      //this.props.onSubmitForm(state);
      console.log(state);
    };
  }

  render() {
    const dates = [this.state.start_date, this.state.end_date];
    const { currentLocale } = this.props;
    const { formatMessage, formatHTMLMessage } = this.props.intl;

    // Bike form specific messages
    const formMessages = defineMessages({
      title: {
        id:'bikes.booking.form.title',
        defaultMessage: 'Boka här!'
      },
      bikeTitle: {
        id: 'bikes.booking.form.bikeTitle',
        defaultMessage: 'Cyklar'
      },
      extraTitle: {
        id: 'bikes.booking.form.extraTitle',
        defaultMessage: 'Tillval'
      },
      personalTitle: {
        id: 'bikes.booking.form.personalTitle',
        defaultMessage: 'Personuppgifter'
      },
      adults: {
        id: 'bikes.booking.form.adults',
        defaultMessage: 'Antal vuxencyklar'
      },
      youths: {
        id: 'bikes.booking.form.youths',
        defaultMessage: 'Antal ungdomscyklar (12 - 15 år)'
      },
      child: {
        id: 'bikes.booking.form.child',
        defaultMessage: 'Antal barncyklar (8 - 12 år)'
      },
      small_child: {
        id: 'bikes.booking.form.small_child',
        defaultMessage: 'Antal barncyklar (6 - 8 år)'
      },
    });

    return (
      <div className="bike-form">
        <h1>{formatMessage(formMessages.title)}</h1>
        <ListErrors errors={this.props.errors}/>

        <form onSubmit={this.submitForm}>
          <fieldset>

            <fieldset className="form-group">
              <Calendar
                onChange={this.onChangeDate}
                locale={currentLocale}
                value={dates}
                showNavigation={true}
                selectRange={true}
              />
            </fieldset>

            <fieldset className="form-group" name="cyklar">
              <legend className="rental-form__legend">{formatMessage(formMessages.bikeTitle)}:</legend>
              <input
                className="form-control"
                type="number"
                placeholder={formatMessage(formMessages.adults)}
                onChange={this.updateSubState('bikes', 'adult')}/>

              <input
                className="form-control"
                type="number"
                placeholder={formatMessage(formMessages.youths)}
                onChange={this.updateSubState('bikes', 'young')}/>

              <input
                className="form-control"
                type="number"
                placeholder={formatMessage(formMessages.child)}
                onChange={this.updateSubState('bikes', 'child')}/>

              <input
                className="form-control"
                type="number"
                placeholder={formatMessage(formMessages.small_child)}
                onChange={this.updateSubState('bikes', 'small_child')}/>
            </fieldset>

            <fieldset className="form-group">
              <legend className="rental-form__legend">{formatMessage(formMessages.extraTitle)}:</legend>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BikeRentalForm));
