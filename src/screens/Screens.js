import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AuthScreen from './Auth';
import MOScreen from './MO';
import WOScreen from './WO';
import BOMScreen from './BOM';
import ProductScreen from './Product';
import MOFormScreen from './AddMo';
import WOFormScreen from './AddWo';
import Initializer from './Initializer';

const store = configureStore();

const registerScreens = () => {
  // Register Screens
  Navigation.registerComponentWithRedux('app.AuthScreen', () => AuthScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.MOScreen', () => MOScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.ProductScreen', () => ProductScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.WOScreen', () => WOScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.BOMScreen', () => BOMScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.MOFormScreen', () => MOFormScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.WOFormScreen', () => WOFormScreen, Provider, store);
  Navigation.registerComponentWithRedux(
    'app.InitializerScreen',
    () => Initializer,
    Provider,
    store
  );
};

export default registerScreens;
