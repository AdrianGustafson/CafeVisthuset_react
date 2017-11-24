const defaultState = {
  appName: 'Cafe Visthuset'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state,
        appLoaded: true,
      };
    case 'REDIRECT':
      return { ...state, redirectTo: null };
  }

 return state;
};
