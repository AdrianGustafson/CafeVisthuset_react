import React from 'react';

const PackagePreviewComponent = () => {
  return (
    <div className="row package-preview borded">
      <div className="package-image col-xs-12 col-md-8">
        <img src={this.props.image} alt=""/>
      </div>
      <div className="package-content col-xs-12 col-md-4">
        <h2><span>{this.props.title}</span></h2>
        <p><span>{this.props.shorttext}</span></p>
        <button className="menu-item__button" onClick={this.expand}>Läs mer!</button>
      </div>
    </div>
  );
}

export default PackagePreviewComponent;
