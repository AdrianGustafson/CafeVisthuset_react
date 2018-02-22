import React from 'react';
import MetaTags from 'react-meta-tags';
import Calendar from 'react-calendar';

//import RentalFormComponent from './RentalForm';

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
              <p>Här ska det komma texter...</p>

            </div>
          <div className="col-xs-12 col-md-4">
            <p>Här kommer bokningsformuläret...</p>
            <Calendar
              selectRange="true"
              locale="sv"
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BikesComponent;
