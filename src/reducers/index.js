import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import echoReducer from './echoReducer';

export default combineReducers({
  dataReducer,
  echoReducer
});
