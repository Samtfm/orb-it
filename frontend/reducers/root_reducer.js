import { combineReducers } from 'redux';

import orbsReducer from './orbs_reducer';

const rootReducer = combineReducers({
  orbs: orbsReducer
});

export default rootReducer;
