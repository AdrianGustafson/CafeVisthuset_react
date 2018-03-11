import React from 'react';
import MetaTags from 'react-meta-tags';

import PackageListComponent from './PackageListComponent';

const mapStateToProps = state => ({
  locale: state.common.locale
})

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    const payload = ''
    dispatch({type: 'SUBMIT_PACKAGE_FORM', payload})
  }
})


class PackagesComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <MetaTags>
          <title>Paketupplevelser | Café Visthuset</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </MetaTags>
        <div className="container">
          <h1>Paketupplevelser hos Café Visthuset</h1>
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
}
