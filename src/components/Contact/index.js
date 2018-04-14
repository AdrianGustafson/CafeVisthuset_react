import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const ContactInfo = () => {
  return (
    <div className="col-xs-12 col-md-6">
      <h2>
        <FormattedMessage
          id="contact.info.title"
          defaultMessage="Här når du oss!"/>
      </h2>
    </div>
  )
}

const GoogleMap = () => {
  return (
    <iframe
      className="contact__map col-xs-12"
      width="100%"
      height="100%"
      frameBorder="0"
      src="https://www.google.com/maps/embed/v1/place?q=Cafe%20Visthuset&key=AIzaSyBndphjOrlfXrP5zGHIfRLMv1-8hH9bnzc"
      allowFullScreen>
    </iframe>
  )
};

const OpeningHours = () => {
  return (
    <div className="col-xs-12 col-md-6">
      <h2>
        <FormattedMessage
          id="contact.open.title"
          defaultMessage="Öppettider"/>
      </h2>
      <p>
        <FormattedMessage
          id="contact.open.text"
          defaultMessage="Öppet alla dagar 10-20"/>
      </p>
    </div>
  )
};

const ContactPage = ( props ) => {

  return (
    <div>
      <div className="container">
          <h1>
            <FormattedMessage
              id="contact.title"
              defaultMessage="Kontakta oss"/>
          </h1>
          <div className="row">
            <ContactInfo />
            <OpeningHours />
          </div>

        </div>
      <GoogleMap />
    </div>
  )
}

export default injectIntl(ContactPage);
