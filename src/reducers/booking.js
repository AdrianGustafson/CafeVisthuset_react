const defaultState = {
  booking: null
};

export default (state= defaultState, action ) => {
  switch (action.type) {
    case 'BOOK_BIKE':
      return {
        ...state,
        booking: action.error ? null : action.payload.booking
      };
  }
  return state;
}
