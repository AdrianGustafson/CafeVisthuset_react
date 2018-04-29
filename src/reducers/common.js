const defaultState = {
  appName: 'Cafe Visthuset',
  token: null,
  redirectTo: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };
    case 'SEND_CONTACT_EMAIL':
      return { ...state };
    case 'REDIRECT':
      return {
        ...state,
        redirectTo: null
      };
    case 'LOGIN':
    case 'REGISER':
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
    case 'CONFIRMATION_PAGE_UNLOADED':
    case 'MENU_PAGE_UNLOADED':
    case 'PACKAGE_PAGE_UNLOADED':
    case 'BIKE_PAGE_UNLOADED':
      return {...state};
  }

 return state;
};
