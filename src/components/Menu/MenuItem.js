import React from 'react';
import marked from 'marked';

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
    if (this.state.toggle){
      const markup = { __html: marked(this.props.text) };
      return (
        <div className="menu-item-expanded col-md-12" onClick={this.expand}>
          <div className="menu-image">
            <img src={this.props.image} alt=""/>
            <div className="row image-content-expanded">
                <div className=" col-xs-12 col-md-8">
                  <h2>{this.props.title}</h2>
                  <div dangerouslySetInnerHTML={markup}></div>
                </div>
                <div className="col-md-4">
                  <p>Placeholder...</p>
                </div>
            </div>
            </div>
          </div>
      )
    }
    else
      return (
        <div className="menu-item col-md-5 col-s-12" onClick={this.expand}>
          <div className="menu-image">
            <img src={this.props.image} alt=""/>
            <div className="image-content">
              <h2><span>{this.props.title}</span></h2>
              <p><span>{this.props.shorttext}</span></p>
            </div>
          </div>
        </div>
      );
    }
}
export default MenuItemComponent;
