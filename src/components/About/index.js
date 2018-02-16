import React from 'react';
import MetaTags from 'react-meta-tags';

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="page">
        <MetaTags>
          <title>Om oss | Café Visthuset</title>
        </MetaTags>
        <div className="container">
          <h1>Café Visthuset</h1>
        </div>
      </div>
    );
  }
}

export default AboutComponent;
