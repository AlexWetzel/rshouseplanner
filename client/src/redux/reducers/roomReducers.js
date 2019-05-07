import * as actions from '../actions/actions';

const initialState = {

}
function roomReducer(state = initialState, action) {
  switch (action) {
    case actions.TEST:
      return "This is a test";
       
    default:
      return state;
  }
}