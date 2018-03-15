import React from 'react';
import { injectIntl } from 'react-intl';

import{ messages } from '../../messages';

const PackagePreviewComponent = (props) => {
  const { formatMessage } = props.intl;
  return (
    <div className="row package-preview borded">
      <div className="package-image col-xs-12 col-md-8">
        <img src={this.props.image} alt=""/>
      </div>
      <div className="package-content col-xs-12 col-md-4">
        <h2><span>{this.props.title}</span></h2>
        <p><span>{this.props.shorttext}</span></p>
        <button className="menu-item__button" onClick={this.expand}>{formatMessage(messages.read_more)}</button>
      </div>
    </div>
  );
}

export default injectIntl(PackagePreviewComponent);
