import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import echoReducer from './echoReducer';
import infoReducer from './infoReducer';

export default combineReducers({
  dataReducer,
  echoReducer,
  infoReducer
});
