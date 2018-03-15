
const mapStateToProps = state => ({
  locale: state.common.locale
})

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    const payload = ''
    dispatch({type: 'SUBMIT_PACKAGE_FORM', payload})
  }
})
