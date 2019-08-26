import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

// import { reducer as formReducer } from 'redux-form'
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import authReducers from '../screens/Auth/reducer';
import MOReducers from '../screens/MO/reducer';

const appReducers = combineReducers({
  auth: authReducers,
  form: formReducer,
  mo: MOReducers,
});
const rootReducer = (state, action) => {
  if (action.type === 'AUTH_OUT') {
    state = undefined;
  }
  return appReducers(state, action);
};
let composeEnhancers = compose;

// eslint-disable-next-line no-undef
if (__DEV__) {
  // eslint-disable-next-line no-undef
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
