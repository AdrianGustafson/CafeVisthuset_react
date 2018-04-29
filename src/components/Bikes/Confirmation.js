import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';

import { messages } from '../../messages';

const ConfirmationMessages = defineMessages({
  // FAQs
  whenTitle: {
    id:'booking.bikes.confirmation.time.title',
    defaultMessage:"När måste jag hämta ut cyklarna?"
  },
  whenText: {
    id: 'booking.bikes.confirmation.time.text',
    defaultMessage: 'Mellan kl. 8-12'
  },
  // Bra att veta

  //Övrigt
  bikes: {
    id: 'booking.bikes.confirmation.bike',
    defaultMessage: 'Cyklar'
  },
  adult: {
    id: 'booking.bikes.confirmation.bike.adult',
    defaultMessage: 'Antal Vuxencyklar'
  },
  youth: {
    id: 'booking.bikes.confirmation.bike.youth',
    defaultMessage: 'Antal ungdomscyklar(12-15 år)'
  },
  child: {
    id: 'booking.bikes.confirmation.bike.child',
    defaultMessage: 'Antal Barncyklar(8-12 år)'
  },
  small_child: {
    id: 'booking.bikes.confirmation.bike.small_child',
    defaultMessage: 'Antal barncyklar(6-8 år)'
  },
  extras: {
    id: 'booking.bikes.confirmation.extras',
    defaultMessage: 'Tillägg'
  },
  child_seats: {
    id: 'booking.bikes.confirmation.extras.child_seats',
    defaultMessage: 'Cykelsadlar'
  },
  bike_trailers: {
    id: 'booking.bikes.confirmation.extras.bike_trailers',
    defaultMessage: 'Cykelkärror'
  },
  meals: {
    id: 'booking.bikes.confirmation.meals',
    defaultMessage: 'Måltider'
  }
})
const mapStateToProps = state => ({
  ...state.booking,
  booking: state.booking.booking,
  errors: state.booking.errors
})

const mapDispatchToProps = dispatch => ({
  onUnLoad: () =>
    dispatch('CONFIRMATION_PAGE_UNLOADED')
})

class BikeConfirmation extends React.Component {

  ComponentWillUnMount() {
    //this.props.onUnLoad();
  }

  render() {

    const { formatMessage, formatDate } = this.props.intl;

    const getListItem = (item, text) => {
      if (item) {
        return (
          <li className="confirmation__list-item"><strong>{formatMessage(text)}: </strong><span>{item}</span></li>
        );
      }
      else {
        return ;
      }
    }
    const getCategory = (ctg, text) => {
      if (ctg) {
        return (
          <li className="confirmation__category_header">{formatMessage(text)}</li>
        );
      }
    }

    if (this.props.errors || !this.props.booking) {
      return (
        <div>
          <h1>Oops, något gick fel...</h1>
          <p>Något gick fel i bokningen. Testa en gång till, om problemet kvarstår hjälper vi dig gärna per telefon eller mejl.</p>
        </div>
      );
    }
    else {
      const { first_name, last_name, email, phone_number, message, start_date, days, booking_id, bikes, extras, lunches } = this.props.booking;
      return (
        <div>
          <h1>Tack {first_name} för din bokning!</h1>
          <div className="row">
            <div className="container">
              <p>Vi har tagit emot din bokning med bokningsnummer <strong>{booking_id}</strong></p>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <h3>Specifikation</h3>
                  <ul>
                    <li className="confirmation__list-item"><strong>{formatMessage(messages.name)}: </strong><span>{first_name} {last_name}</span></li>
                    <li className="confirmation__list-item"><strong>{formatMessage(messages.phone_number)}: </strong><span>{phone_number}</span></li>
                    <li className="confirmation__list-item"><strong>{formatMessage(messages.email)}: </strong><span>{email}</span></li>
                    {getListItem(message, messages.message)}
                    <br/>
                    <li className="confirmation__list-item"><strong>{formatMessage(messages.start_date)}: </strong><span>{formatDate(start_date)}</span></li>
                    <li className="confirmation__list-item"><strong>{formatMessage(messages.number_of_days)}: </strong><span>{days}</span></li>

                    {getCategory(bikes, ConfirmationMessages.bikes)}
                    {getListItem(bikes.adult, ConfirmationMessages.adult)}
                    {getListItem(bikes.young, ConfirmationMessages.youth)}
                    {getListItem(bikes.child, ConfirmationMessages.child)}
                    {getListItem(bikes.small_child, ConfirmationMessages.small_child)}

                    {getCategory(extras, ConfirmationMessages.extras)}
                    {getListItem(extras.child_seats, ConfirmationMessages.child_seats)}
                    {getListItem(extras.bike_trailers, ConfirmationMessages.bike_trailers)}

                    {getCategory(meals, ConfirmationMessages.meals)}

                  </ul>
                </div>

                <div className="col-xs-12 col-md-6">
                  <h3>Vanliga frågor</h3>
                  <div className="confirmation__info-group">
                    <strong>{formatMessage(ConfirmationMessages.whenTitle)}</strong>
                    <span>{formatMessage(ConfirmationMessages.whenText)}</span>
                  </div>
                  <h3>Bra att tänka på</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BikeConfirmation));
