import React from 'react';
import logo from '../img/logos/logo.jpg';
import gk_officiell_partner from '../img/logos/gk_officiell_partner.png';
import vastsverige_svensk from '../img/logos/vastsverige_svensk.jpg';

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

const SiteMapComponent = () => {
  return (
    <div className="col-md-8 col-xs-12 sitemap-component">

    </div>
  );
}
const LogoComponent = () => {
  return (
    <div className="col-xs-12 col-md-4 logo-component">
      <img src={logo} className="logo"/>
      <div>
        <img src={vastsverige_svensk} className="west-sweden-logo" />
        <img src={gk_officiell_partner} className="gota-canal-logo" />
      </div>
    </div>
  );
}

const Footer = () => {
  return (
  <footer>
    <div className="container">
      <div className="row">
        <SiteMapComponent />

        <AdressComponent />
      </div>
      <div className="row">
        <LogoComponent />
      </div>

    </div>
  </footer>
  );
}

export default Footer;
