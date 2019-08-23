// Wrote by Muhammad Thaufiq Umardi
// Solar Devices Monitoring App
// thaufiqumardii@gmail.com
// https://umardiw.dev

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const _XHR = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

XMLHttpRequest = _XHR;
AppRegistry.registerComponent(appName, () => App);
