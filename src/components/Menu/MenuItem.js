import React from 'react';
import marked from 'marked';
import { injectIntl } from 'react-intl';

import {messages} from '../../messages';

class MenuItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'toggle': false};

    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState(prevState => ({
      'toggle': !prevState.toggle
    }))

  }

  render() {
    const { formatMessage } = this.props.intl;
    if (this.state.toggle){
      const markup = { __html: marked(this.props.text) };
      return (
        <div className="menu-item-expanded borded col-md-12">
          <div className="menu-image">
            <img src={this.props.image} alt=""/>
            <div className="image-content-expanded">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-8">
                    <h2>{this.props.title}</h2>
                    <div dangerouslySetInnerHTML={markup}></div>
                  </div>
                  <div className="col-md-4 d-none d-md-block">
                    <p>Placeholder...</p>
                  </div>

                  <button className="menu-item__button menu-item--expanded" onClick={this.expand}>{formatMessage(messages.close)}</button>

                </div>
              </div>
            </div>
          </div>
          </div>
      )
    }
    else
      return (
        <div className="menu-item borded col-md-5 col-s-12">
          <div className="menu-image">
            <img src={this.props.image} alt=""/>
            <div className="image-content">
              <h2><span>{this.props.title}</span></h2>
              <p><span>{this.props.shorttext}</span></p>
              <button className="menu-item__button" onClick={this.expand}>{formatMessage(messages.read_more)}</button>
            </div>
          </div>
        </div>
      );
    }
}
export default injectIntl(MenuItemComponent);
