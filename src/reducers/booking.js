const DummyBooking = {
  first_name: 'Adrian',
  last_name: 'Gustafson',
  phone_number: '073-234 034 12',
  email: 'adrian.g@telia.com',
  message: 'Hejaha!',
  booking_id: '18032101',
  start_date: '2018-04-20T16:47:59.963Z',
  days: 2,
  bikes: {
    adult: 2,
    child: 1,
    small_child: 0,
    youth: 2
  },
  extras: {
    child_seats: 1,
    bike_trailers: 0
  },
  lunches: {
  }
}
export default (state={}, action ) => {
  switch (action.type) {
    case 'BOOK_BIKE':
      return {
        ...state,
        redirectTo: action.error ? null : '/bikes/thanks',
        booking: action.error ?  null : action.payload.booking, //DummyBooking,
        errors: action.error ? action.error : null
      };
    case 'BOOKING_PAGE_UNLOADED':
    case 'CONFIRMATION_PAGE_UNLOADED':
    case 'PACKAGE_PAGE_UNLOADED':
      return {};
  }
  return state;
}
