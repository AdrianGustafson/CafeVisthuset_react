import React from 'react';

const Banner = ({ appName }) => {
  return (
      <div className="jumbotron col-xs-12">
        <h1>Välkommen till {appName}</h1>
      </div>
  );
}

export default Banner;
