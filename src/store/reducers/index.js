import { combineReducers } from 'redux';
import login from './loginReducers';
import dashBaord from './dashBaordReducers';
import signUp from './signUpReducers';
import settings from './settings';

const reducers = combineReducers({
   settings,
   login,
   signUp,
   dashBaord
});

export default reducers;