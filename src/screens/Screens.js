import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AuthScreen from './Auth';
import MOScreen from './MO';
import WOScreen from './WO';
import ProductScreen from './Product';
import MOFormScreen from './AddMo';
import Initializer from './Initializer';

const store = configureStore();

const registerScreens = () => {
  // Register Screens
  Navigation.registerComponentWithRedux('app.AuthScreen', () => AuthScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.MOScreen', () => MOScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.ProductScreen', () => ProductScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.WOScreen', () => WOScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.MOFormScreen', () => MOFormScreen, Provider, store);
  Navigation.registerComponentWithRedux(
    'app.InitializerScreen',
    () => Initializer,
    Provider,
    store
  );

  // Navigation.registerComponentWithRedux('app.DashboardScreen', () => Dashboard, Provider, store);

  // Navigation.registerComponentWithRedux('app.HistoryScreen', () => History, Provider, store);

  // Navigation.registerComponentWithRedux('app.SettingsScreen', () => Settings, Provider, store);

  // Navigation.registerComponentWithRedux('app.DevicesScreen', () => Devices, Provider, store);

  // Navigation.registerComponentWithRedux(
  //   'app.DetailHistoryScreen',
  //   () => DetailHistory,
  //   Provider,
  //   store
  // );

  // Navigation.registerComponentWithRedux(
  //   'app.DetailDeviceScreen',
  //   () => DeviceDetail,
  //   Provider,
  //   store
  // );
};

export default registerScreens;
