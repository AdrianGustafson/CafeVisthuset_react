import React from 'react';
import MetaTags from 'react-meta-tags';

const AboutContent = (locale) => {
  return (
    <div>
      <p>
        Vi var väldigt unga när vi började. Byggde trots att vi inget visst om att bygga,
        det blev Visthuset.
      </p>
    </div>
  );
}
class AboutComponent extends React.Component {
  render() {
    return (
      <div className="page">
        <MetaTags>
          <title>Om oss | Café Visthuset</title>
        </MetaTags>
        <div className="container">
          <h1>Om Café Visthuset</h1>

          <AboutContent locale={this.props.locale}/>
        </div>
      </div>
    );
  }
}

export default AboutComponent;
