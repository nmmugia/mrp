import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

// import { reducer as formReducer } from 'redux-form'
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import authReducers from '../screens/Auth/reducer';
import MOReducers from '../screens/MO/reducer';
import AddMOReducers from '../screens/AddMo/reducer';
import AddWOReducers from '../screens/AddWo/reducer';
import WOReducers from '../screens/WO/reducer';
import BOMReducers from '../screens/BOM/reducer';
import ProductReducers from '../screens/Product/reducer';

const appReducers = combineReducers({
  auth: authReducers,
  form: formReducer,
  mo: MOReducers,
  addMo: AddMOReducers,
  addWo: AddWOReducers,
  bom: BOMReducers,
  wo: WOReducers,
  product: ProductReducers,
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
