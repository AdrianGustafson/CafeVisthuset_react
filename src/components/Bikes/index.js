import React from 'react';
import MetaTags from 'react-meta-tags';
import Calendar from 'react-calendar';

import BikeContent from './BikeContent';
import BikeRentalForm from './BikeRentalForm';

class BikesComponent extends React.Component {
  render () {
    return (
      <div className="page">
        <MetaTags>
          <title>Cykeluthyrning | Café Visthuset</title>
          <meta name="description" content="I Café Visthuset kan du hyra cyklar för en dags cykling längs Göta kanal." />
          <meta name="keywords" content="cykeluthyrning, cykelsemester Sverige, Göta kanal, cykla längs Göta kanal"/>
        </MetaTags>
        <div className="container">
          <h1>Café Visthusets Cykeluthyrning</h1>
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
}

export default BikesComponent;
