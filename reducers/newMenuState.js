
export default (state = false, action) => {
  switch (action.type){
    case 'TOGGLE_NEW_MENU':
      return !state;
    default:
      return state;
  }
}