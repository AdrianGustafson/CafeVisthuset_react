import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Calendar from 'react-calendar';

import agent from '../../agent';
import ListErrors from '../ListErrors';
import ModalWrapper from '../ModalWrapper';

const mapStateToProps = state => ({
  ...state.booking
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

    return (
      <div className="bike-form">
        <h1>Boka här!</h1>
        <ListErrors errors={this.props.errors}/>

        <form onSubmit={this.submitForm}>
          <fieldset>

            <fieldset className="form-group">
              <Calendar
                onChange={this.onChangeDate}
                value={dates}
                showNavigation={true}
                selectRange={true}
              />
            </fieldset>

            <fieldset className="form-group" name="cyklar">
              <legend className="rental-form__legend">Cyklar:</legend>
              <input
                className="form-control"
                type="number"
                placeholder="Antal vuxencyklar"
                onChange={this.updateSubState('bikes', 'adult')}/>

              <input
                className="form-control"
                type="number"
                placeholder="Antal ungdomscyklar (12 - 15 år)"
                //value={this.state.young_bikes}
                onChange={this.updateSubState('bikes', 'young')}/>

              <input
                className="form-control"
                type="number"
                placeholder="Antal barncyklar (8-12 år)"
                //value={this.state.child_bikes}
                onChange={this.updateSubState('bikes', 'child')}/>

              <input
                className="form-control"
                type="number"
                placeholder="Antal barncyklar (6-8 år)"
                //value={this.state.small_child_bikes}
                onChange={this.updateSubState('bikes', 'small_child')}/>
            </fieldset>

            <fieldset className="form-group">
              <legend className="rental-form__legend">Tillval:</legend>
            </fieldset>

            <fieldset>
                <legend className="rental-form__legend">Personuppgifter:</legend>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Förnamn"
                  value={this.state.first_name}
                  onChange={this.updateState('first_name')} />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Efternamn"
                  value={this.state.last_name}
                  onChange={this.updateState('last_name')} />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Telefonnummer"
                  value={this.state.phone_number}
                  onChange={this.updateState('phone_number')} />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Epost"
                  value={this.state.email}
                  onChange={this.updateState('email')} />
              </fieldset>

              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Meddelande till oss..."
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
                    Vill du ha nyheter och erbjudanden?
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="terms"
                      required />
                    <span>Jag har läst och accepterar
                    <button
                      className="btn btn-link modal-button-link"
                      type="button"
                      data-toggle="modal"
                      data-target="#bike-rental-terms">
                       bokningsvillkoren
                    </button></span>
                    <ModalWrapper id="BIKE_RENTAL_TERMS" />
                  </label>
                </div>
                <span><button
                  className="btn btn-link"
                  type="button"
                  data-toggle="modal"
                  data-target="#privacy-policy">
                  Läs om hur vi hanterar dina personuppgifter
                </button></span>
                <ModalWrapper id="PRIVACY_POLICY" />
              </fieldset>
            </fieldset>

            <fieldset className="form-group">
              <button
                className="visthuset-primary btn btn-lg btn-primary pull-xs-right"
                type="submit"
                onClick={this.onSubmit}>
                Boka!
              </button>
            </fieldset>
          </fieldset>
        </form>
    </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BikeRentalForm);
