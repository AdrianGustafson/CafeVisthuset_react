import React from 'react'
import { connect } from 'react-redux';
import InstagramWidgetComponent from '../SnapWidget';
import MetaTags from 'react-meta-tags';

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
            title="Vår meny"
            text="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." />

          <PagePreviewComponent
            redirectURL="/"
            image="img/Visthuset_biking.jpg"
            title="Cykeluthyrning"
            text="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." />

          <PagePreviewComponent
            redirectURL="/"
            image='img/Gota_kanal_Juno_locks.jpg'
            title="Cykelpaket"
            text="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." />

        </div>
        <InstagramWidgetComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
