import React from 'react'
import { connect } from 'react-redux';
import InstagramWidgetComponent from '../SnapWidget';

import Banner from './Banner';
import PagePreviewComponent from '../PagePreview';

const mapStateToProps = state => ({
  appName: state.common.appName
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
        <Banner
          appName={this.props.appName}/>

        <div className="d-md-flex p-2 justify-content-around content">
          <PagePreviewComponent
            redirectURL="/menu"
            image='coffee'
            title="Vår meny"
            text="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." />

          <PagePreviewComponent
            redirectURL="/"
            image='Visthuset_biking'
            title="Cykeluthyrning"
            text="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." />

          <PagePreviewComponent
            redirectURL="/"
            image='Gota_kanal_Juno_locks'
            title="Cykelpaket"
            text="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." />

        </div>
        <InstagramWidgetComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
