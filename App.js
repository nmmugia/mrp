import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens/Screens';

registerScreens();
// Start a App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'app.InitializerScreen',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
          },
        },
      },
    },
  });
});
