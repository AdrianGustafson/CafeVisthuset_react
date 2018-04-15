import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import marked from 'marked';

import { messages } from '../../messages';
import packages from './messages';

import PackageBookingForm from './PackageBookingForm';

const IncludedListComponent = ({ included, formatMessage }) => {
  return (
    <div className="col-6 col-xs-6">

      <ul className="list-group list-group-flush">
        <h3 className="package__included-list-header list-group-item">
          {formatMessage(messages.includedTitle)}
        </h3>
      {
        Object.keys(included).map((key) => {
          return (
            <li key={key} className="package__included-list-item list-group-item">{formatMessage(included[key])}</li>
          );
        })
      }
    </ul>
    </div>
  );
}

const PriceInfo = ({ price, formatMessage }) => {
  return (
    <div className="col-6 col-xs-6">
      <ul className="list-group list-group-flush">
      <h3 className="package__included-list-header list-group-item">{formatMessage(messages.priceTitle)}</h3>
      {
        Object.keys(price).map((key) => {
          return (
            <li
              key={key}
              className="package__included-list-item list-group-item">
              {formatMessage(messages[key])}: {price[key]} SEK
            </li>
          );
        })
      }
    </ul>
    </div>
  );
};

const PackageContentComponent = ({ pkg, text, formatMessage }) => {
  return (
    <div className="col-xs-12 col-md-8">
      <div dangerouslySetInnerHTML={text}></div>

      <div className="row">
        <PriceInfo
          price={pkg.price}
          formatMessage={formatMessage} />

        <IncludedListComponent
          included={pkg.included}
          formatMessage={formatMessage}
          />
      </div>
    </div>
  );
};

class Package extends React.Component {
  render() {
    const { formatMessage } = this.props.intl;
    const pkg = packages[this.props.match.params.slug];
    const text = { __html: marked(formatMessage(pkg.messages.text))};

    return (
      <div className="container page">
        <div className="package__image">
          <img
            src={pkg.imageUrl}
            className="img-fluid col-xs-12" />
          <h1 className="package__image-title">{formatMessage(pkg.messages.name)}</h1>
        </div>
        <div className="row">
            <PackageContentComponent
              pkg={pkg}
              text={text}
              formatMessage={formatMessage}/>

              <PackageBookingForm />
        </div>

      </div>
    );
  };
};

export default injectIntl(Package);
