import React from 'react';
import MetaTags from 'react-meta-tags';

import PackageListComponent from './PackageListComponent';

import { injectIntl } from 'react-intl';

import {pages } from '../../messages';

const Packages = (props) => {
  const { formatMessage } = props.intl;
  const supertitle = formatMessage(pages.packages.supertitle);
  return (
    <div className="page">
      <MetaTags>
        <title>{supertitle}</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </MetaTags>
      <div className="container">
        <h1>{formatMessage(pages.packages.title)}</h1>
        <div className="row">
          <img src="" alt="" />
          <div className="package-preview-content">

          </div>
        </div>
        <PackageListComponent />
      </div>
    </div>
  );
}

export default injectIntl(Packages);
