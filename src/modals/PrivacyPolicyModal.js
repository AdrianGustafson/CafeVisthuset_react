import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import { messages } from '../messages';

const PrivacyPolicyModal = (props) => {
  const { formatMessage } = props.intl;
  return (
    <div className="modal fade" id="privacy-policy" tabIndex="-1" role="dialog" aria-hidden="true" aria-labelledby="PrivacyPolicy">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="PrivacyPolicy">
              <FormattedMessage
                id='modals.privacy.title'
                defaultMessage='Hantering av personuppgifter'/>
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <FormattedMessage
              id='modals.privacy.body'
              defaultMessage='Vi vill att du ska vara säker när du bokar hos oss. Därför hanterar vi inte mer av dina personuppgifter än nödvändigt. Vi sparar dessutom inga uppgifer om dig efter ditt besök, sålänge du inte godkänner det.' />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-danger" data-dismiss="modal">{formatMessage(messages.close)}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(PrivacyPolicyModal);
