import React from 'react';

class TripAdvisorReviewComponent extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.async = true;
    script.src = "https://www.jscache.com/wejs?wtype=cdswritereviewlg&amp;uniq=417&amp;locationId=6985659&amp;lang=sv&amp;lang=sv&amp;display_version=2";
    document.body.appendChild(script);
  }

  render () {
    return (
      <div id="TA_cdswritereviewlg417" className="TA_cdswritereviewlg">
        <ul id="BHbxMXVKi2RN" className="TA_links 6Q780njwi">
          <li id="znCvd4MaJxD" className="Vb7LzjuOSB">
            <a target="_blank" href="https://www.tripadvisor.se/">
              <img src="https://www.tripadvisor.se/img/cdsi/img2/branding/medium-logo-12097-2.png" alt="TripAdvisor"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

class TripAdvisorBadgeComponent extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://www.jscache.com/wejs?wtype=rated&amp;uniq=215&amp;locationId=6985659&amp;lang=sv&amp;display_version=2";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="TA_rated215" className="TA_rated">
        <ul id="P489CA" className="TA_links ZDFzS53">
          <li id="Eqc7XqGRa" className="9llDgv">
            <a target="_blank" href="https://www.tripadvisor.se/">
              <img src="https://www.tripadvisor.se/img/cdsi/img2/badges/ollie-11424-2.gif" alt="TripAdvisor"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export {
  TripAdvisorBadgeComponent,
  TripAdvisorReviewComponent
};
