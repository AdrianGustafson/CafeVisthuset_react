import React from 'react'
import { connect } from 'react-redux';
import InstagramWidgetComponent from '../SnapWidget';
import MetaTags from 'react-meta-tags';
import { defineMessages, formatMessage } from 'react-intl';

import Banner from './Banner';
import PagePreviewComponent from '../PagePreview';

const mapStateToProps = state => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser
});



const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: 'HOME_PAGE_LOADED', payload}),
  onUnLoad: () =>
    dispatch({ type: 'HOME_PAGE_UNLOADED' })
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad();
  }

  componentWillUnMount() {
    this.props.onUnLoad();
  }

  render () {
    const messages=defineMessages({
      menuTitle: {
        id: "Home.preview.menu.title",
        defaultMessage: "Vår meny"
      },
      menuText: {
        id: "Home.preview.menu",
        defaultMessage: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
      },
      bikesTitle: {
        id: "Home.preview.bikes.title",
        defaultMessage: "Cykeluthyrning"
      },
      bikesText: {
        id: "Home.preview.bikes",
        defaultMessage: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
      },
      packageTitle: {
        id: "Home.preview.package.title",
        defaultMessage: "Cykelpaket"
      },
      packageText: {
        id: "Home.preview.package",
        defaultMessage: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
      }
    });

    return (
      <div >
        <MetaTags>
          <title>Café Visthuset!</title>
          <meta name="description" content="Törebodas mysigaste café och Göta kanals bästa kopp kaffe!"/>
          <meta name="keywords" content="café, kaffe, lunch, fika, Töreboda, Göta kanal, cykeluthyrning" />
        </MetaTags>
        <Banner
          appName={this.props.appName}/>
        <div className="d-md-flex p-2 justify-content-around content">
          <PagePreviewComponent
            redirectURL="/menu"
            image='img/menu/coffee.jpg'
            title={ formatMessage(messages.menuTitle)}
            text={ formatMessage(messages.menuText)}
          />

          <PagePreviewComponent
            redirectURL="/bikes"
            image="img/Visthuset_biking.jpg"
            title= { formatMessage(messages.bikesTitle)}
            text={ formatMessage(messages.bikesText)} />

          <PagePreviewComponent
            redirectURL="/packages"
            image='img/Gota_kanal_Juno_locks.jpg'
            title=""
            text="" />

        </div>
        <InstagramWidgetComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
