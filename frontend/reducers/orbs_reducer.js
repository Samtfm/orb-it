import { RECEIVE_ORBS } from '../actions/orbs_actions';
import merge from 'lodash/merge';

const orbsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ORBS:
      return merge({}, state, action.orbs)
    default:
      return state
  }
}

export default orbsReducer;
