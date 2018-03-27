import React from 'react';
import { injectIntl } from 'react-intl';

import packages from './messages';

class Package extends React.Component {
  render() {
    const  { formatMessage } = this.props.intl;
    console.log(this.props);
    const pkg = packages[this.props.match.params.slug];
    console.log(pkg);
    return (
      <div>
        <h1>{formatMessage(pkg.messages.name)}</h1>
      </div>
    );
  };
};

export default injectIntl(Package);
