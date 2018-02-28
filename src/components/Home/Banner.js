import React from 'react';

const Banner = ({ appName }) => {
  return (
      <div className="banner col-xs-12">
        <div className="banner-image">
          <img src='./img/home/Visthuset-hover.jpg' alt=""/>
          <div className="banner-content">
            <h1 id="banner-heading">Välkommen till {appName}</h1>
            <div className="container banner-box ">
              <div className="row">
                <div className="col-xs-12 col-md-offset-7 col-md-5">
                  <h2>Subheading</h2>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
}

export default Banner;
