import React from 'react';
import MetaTags from 'react-meta-tags';
import Calendar from 'react-calendar';
import { injectIntl } from 'react-intl';

import BikeContent from './BikeContent';
import BikeRentalForm from './BikeRentalForm';

import { pages } from '../../messages';

const BikesComponent = (props) => {
  const { formatMessage } = props.intl;
  const supertitle = formatMessage(pages.bikes.supertitle);
  return (
    <div className="page">
      <MetaTags>
        <title>{supertitle}</title>
        <meta name="description" content="I Café Visthuset kan du hyra cyklar för en dags cykling längs Göta kanal." />
        <meta name="keywords" content="cykeluthyrning, cykelsemester Sverige, Göta kanal, cykla längs Göta kanal"/>
      </MetaTags>
      <div className="container">
        <h1>{formatMessage(pages.bikes.title)}</h1>
        <div className="row">
          <div className="col-xs-12 col-md-8">
          <BikeContent />
          </div>
        <div className="col-xs-12 col-md-4 rental-form borded">
          <BikeRentalForm />
        </div>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(BikesComponent);
