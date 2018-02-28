import React from 'react';

import BikeRentalModal from '../modals/BikeRentalModal';
import PrivacyPolicyModal from '../modals/PrivacyPolicyModal';

const ModalWrapper = ({ id }) => {
  switch ( id ) {
    case 'BIKE_RENTAL_TERMS':
      return <BikeRentalModal />;
    case 'PRIVACY_POLICY':
      return <PrivacyPolicyModal />;
  }
}

export default ModalWrapper;
