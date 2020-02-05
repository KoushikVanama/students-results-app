import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { user } from './user';
import { students } from './students';

const rootReducer = combineReducers({
  user,
  students,
  form: formReducer
});

export default rootReducer;
