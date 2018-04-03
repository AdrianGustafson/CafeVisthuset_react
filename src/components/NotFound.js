import React from 'react';
import { injectIntl } from 'react-intl';
import { messages }from '../messages';

const NotFound = ( props ) => {
  const { formatMessage } = props.intl;
  return (
    <div className="row">
      <div className="col-xs-12 col-md-6 offset-md-3">
        <h1>{formatMessage(messages.NotFoundTitle)}</h1>
        <p>{formatMessage(messages.NotFoundMessage)}</p>
      </div>
    </div>
  );
}

export default injectIntl(NotFound);
