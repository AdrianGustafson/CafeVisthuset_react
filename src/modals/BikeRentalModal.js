import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import { messages } from '../messages';

const BikeRentalModal = (props) => {
  const { formatMessage } = props.intl;
  return (
    <div className="modal fade" id="bike-rental-terms" tabIndex="-1" role="dialog" aria-hidden="true" aria-labelledby="BikeRentalTerms">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="BikeRentalTerms">
              <FormattedMessage
                id='modals.rentalTerms.title'
                defaultMessage='Villkor för cykeluthyrning' />
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <FormattedMessage
              id='modals.rentalTerms.body'
              defaultMessage='Här ska bokningsvillkoren vara!'
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-danger" data-dismiss="modal">{formatMessage(messages.close)}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(BikeRentalModal);
