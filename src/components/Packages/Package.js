import React from 'react';
import { injectIntl } from 'react-intl';

import packages from './messages';

class Package extends React.Component {
  render() {
    const  { formatMessage } = this.props.intl;
    const pkg = packages[this.props.match.params.slug];
    console.log(pkg);
    return (
      <div className="row">
        <img
          src={pkg.imageUrl}
          className="img-fluid col-xs-12" />
        <h1>{formatMessage(pkg.messages.name)}</h1>
      </div>
    );
  };
};

export default injectIntl(Package);
