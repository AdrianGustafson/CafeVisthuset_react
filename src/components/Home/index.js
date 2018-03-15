import React from 'react'
import { connect } from 'react-redux';
import InstagramWidgetComponent from '../SnapWidget';
import MetaTags from 'react-meta-tags';
import { injectIntl } from 'react-intl';

import Banner from './Banner';
import PagePreviewComponent from '../PagePreview';

import { pages } from '../../messages';

const mapStateToProps = state => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  locales: state.locales
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
    const { formatMessage } = this.props.intl;

    return (
      <div >
        <MetaTags>
          <title>Café Visthuset</title>
          <meta name="description" content="Törebodas mysigaste café och Göta kanals bästa kopp kaffe!"/>
          <meta name="keywords" content="café, kaffe, lunch, fika, Töreboda, Göta kanal, cykeluthyrning" />
        </MetaTags>
        <Banner
          appName={this.props.appName}/>
        <div className="d-md-flex p-2 justify-content-around content">
          <PagePreviewComponent
            redirectURL="/menu"
            image='img/menu/coffee.jpg'
            title={ formatMessage(pages.home.menuTitle)}
            text={ formatMessage(pages.home.menuText)}
          />

          <PagePreviewComponent
            redirectURL="/bikes"
            image="img/Visthuset_biking.jpg"
            title= { formatMessage(pages.home.bikesTitle)}
            text={ formatMessage(pages.home.bikesText)} />

          <PagePreviewComponent
            redirectURL="/packages"
            image='img/Gota_kanal_Juno_locks.jpg'
            title={ formatMessage(pages.home.packagesTitle) }
            text={ formatMessage(pages.home.packagesText) } />

        </div>
        <InstagramWidgetComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Home));
