/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { authentication } from '_reducers/authentication.reducer';
import { registration } from '_reducers/registration.reducer';
import { users } from '_reducers/users.reducer';
import { alert } from '_reducers/alert.reducer';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    authentication,
    registration,
    users,
    alert,
    ...injectedReducers,
  });

  return rootReducer;
}
