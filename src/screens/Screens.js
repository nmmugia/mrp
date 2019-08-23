import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AuthScreen from './Auth';
import Initializer from './Initializer';

const store = configureStore();

const registerScreens = () => {
  // Register Screens
  Navigation.registerComponentWithRedux('app.AuthScreen', () => AuthScreen, Provider, store);

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
