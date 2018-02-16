import React from 'react';
import { connect } from 'react-redux';
import MetaTags from 'react-meta-tags';

import MenuItemList from './MenuItemList';

class Menu extends React.Component {

  render() {
    return (
      <div className="page">
        <MetaTags>
          <title>Café Visthuset | Meny</title>
          <meta name="description" content="Café Visthusets meny | Riktigt gott kaffe, luncher och fika"/>
          <meta name="keywords" content="luncher, gott kaffe, Töreboda, glass, fika"/>
        </MetaTags>
        <h1>Meny</h1>
        <MenuItemList/>
      </div>
    );
  }
}

export default Menu;
