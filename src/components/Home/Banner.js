import React from 'react';
import { FormattedMessage } from 'react-intl';
import { pages } from '../../messages';

const Banner = ({ props, appName }) => {
  return (
      <div className="banner col-xs-12">
        <div className="banner-image">
          <img src='./img/home/Visthuset-hover.jpg' alt=""/>
          <div className="container banner-content">
            <div className="banner-box ">
            <h1 id="banner-heading">
              <FormattedMessage
                id="home.banner.greeting"
                defaultMessage= {`Välkommen till {appName}`}
                values={{appName}}
              />
            </h1>
              <div className="row">
                <div className="d-none d-md-block">
                  <div className="col-xs-12 col-md-5 banner-sub-content">
                    <h2>Subheading</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
}

export default Banner;
