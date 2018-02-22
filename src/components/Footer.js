import React from 'react';
import logo from '../img/logos/logo.jpg';
import gk_officiell_partner from '../img/logos/gk_officiell_partner.jpg';
import vastsverige_svensk from '../img/logos/vastsverige_svensk.jpg';

const Footer = () => {
  return (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <img src={logo} className="logo"/>
          <img src={vastsverige_svensk} className="west-sweden-logo" />
          <img src={gk_officiell_partner} className="gota-canal-logo" />
        </div>

        <div className="col-xs-12 col-md-3">
    	     <h3>Kontakta oss!</h3>
      	   <adress>
             Café Visthuset<br />
	           Kanalvägen 2, Töreboda<br />
          </adress>
    	      <a href="tel:0506 - 77 75 50"> 0506 - 77 75 50</a><br />
            <a href="mailto:info@cafevisthuset.se">info@cafevisthuset.se</a><br/><br/>
            <a href="/">www.cafevisthuset.se</a><br />
      	    <a href="http://www.cyklagotakanal.se">www.cyklagotakanal.se</a>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
