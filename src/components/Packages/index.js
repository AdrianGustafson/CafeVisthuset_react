import React from 'react';
import MetaTags from 'react-meta-tags';
import { injectIntl } from 'react-intl';
import PackageListComponent from './PackageListComponent';

import {pages } from '../../messages';

const PackagesPreviewComponent = (props) => {
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
        <PackageListComponent />
      </div>
    </div>
  );
}

export default injectIntl(PackagesPreviewComponent);
