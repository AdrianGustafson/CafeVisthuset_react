import React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import FaceBookComponent from './Facebook';
//import { TripAdvisorBadgeComponent } from './TripAdvisor';
import ContactWidget from './ContactWidget';

import logo from '../img/logos/logo.jpg';
import gk_officiell_partner from '../img/logos/gk_officiell_partner.png';
import vastsverige_svensk from '../img/logos/vastsverige_svensk.jpg';
import { pages } from '../messages';

const AdressComponent = () => {
  return (
    <div className="col-xs-12 col-md-3 adress-component">
        <h5>Café Visthuset</h5>
        <p>Kanalvägen 2<br />
        545 30, Töreboda</p>
        <a href="tel:0506 - 77 75 50"> 0506 - 77 75 50</a><br />
        <a href="mailto:info@cafevisthuset.se">info@cafevisthuset.se</a><br/><br/>
        <a href="/">www.cafevisthuset.se</a><br />
        <a href="http://www.cyklagotakanal.se">www.cyklagotakanal.se</a>
    </div>
  );
}

const LogoComponent = () => {
  return (
    <div className="col-xs-12 col-md-4 logo-component">
      <img src={logo} className="logo"/>
      <div>
        <a href="http://www.vastsverige.com" ><img src={vastsverige_svensk} className="west-sweden-logo" /></a>
        <a href="http://www.gotakanal.se" ><img src={gk_officiell_partner} className="gota-canal-logo" /></a>
      </div>
    </div>
  );
}

const SiteMapComponent = ({ formatMessage }) => {
  return (
    <div className="col-md-8 col-xs-12 sitemap-component">
      <ul className="list-group col-xs-12 col-md-4">
        <li className="sitemap-link"><Link to='/'>{formatMessage(pages.home.name)}</Link></li>
        <li className="sitemap-link"><Link to='/menu'>{formatMessage(pages.menu.name)}</Link></li>
        <li className="sitemap-link"><Link to='/bikes'>{formatMessage(pages.bikes.name)}</Link></li>
        <li className="sitemap-link"><Link to='/packages'>{formatMessage(pages.packages.name)}</Link></li>
        <li className="sitemap-link"><Link to='/events'>{formatMessage(pages.events.name)}</Link></li>
        <li className="sitemap-link"><Link to='/about'>{formatMessage(pages.about.name)}</Link></li>
        <li className="sitemap-link"><Link to='/pages'>{formatMessage(pages.contact.name)}</Link></li>
      </ul>
    </div>
  );
}

const SocialWidgetComponent = () => {
  return (
      <div className="col-xs-12 col-md-4">
        <FaceBookComponent
          tabs=''
          show_facepile="true"
        />
      </div>
  )
};

const Footer = ( props ) => {
  const { formatMessage } = props.intl;
  return (
    <footer>
      <div className="container">
        <div className="row border-row">
          <SiteMapComponent
            formatMessage={formatMessage}/>

          <AdressComponent />
        </div>
        <div className="row border-row">
          <LogoComponent />
          <SocialWidgetComponent />
          <ContactWidget />
        </div>

      </div>
    </footer>
  );
}
//<ContactWidget/>
export default injectIntl(Footer);
