import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import MetaTags from 'react-meta-tags';

import MenuItemList from './MenuItemList';

import { pages } from '../../messages';

const Menu = (props) => {
  const { formatMessage } = props.intl;
  const supertitle = formatMessage(pages.bikes.supertitle);
  return (
    <div className="page">
      <MetaTags>
        <title>{supertitle}</title>
        <meta name="description" content="Café Visthusets meny | Riktigt gott kaffe, luncher och fika"/>
        <meta name="keywords" content="luncher, gott kaffe, Töreboda, glass, fika"/>
      </MetaTags>
      <h1>{formatMessage(pages.menu.title)}</h1>
      <MenuItemList/>
    </div>
  );
}

export default injectIntl(Menu);
