import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { messages } from '../../messages';
import { Link } from 'react-router-dom';

class Banner extends React.Component {
  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div className="banner">
        <div className="banner-image">
          <img src='static/img/home/Visthuset-hover.jpg' alt=""/>
          <div className="banner-content">
            <h1 id="banner-heading">
              <FormattedMessage
                id="home.banner.greeting"
                defaultMessage= {`Välkommen till Café Visthuset!`}
              />
            </h1>
            <p id="banner-text">
              <FormattedMessage
                id="home.banner.text"
                defaultMessage="Ett visthus var en plats på gården där mat förvarades, ett slags skafferi."
              />
            </p>
            <Link
              className="visthuset-primary btn btn-primary"
              to='/about'>
              {formatMessage(messages.read_more)}
            </Link>
          </div>

        </div>
      </div>
    )
  };
}

export default injectIntl(Banner);
