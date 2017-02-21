export default (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_LOCALE': {
      return {...state, currentLocale: action.payload.locale};
    }

    default:
      return state;
  }
};
