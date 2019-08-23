import { Navigation } from 'react-native-navigation';
import evilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const startTabs = () => {
  Promise.all([
    MaterialCommunityIcons.getImageSource('view-dashboard', 40),
    evilIcon.getImageSource('calendar', 40),
    evilIcon.getImageSource('gear', 40),
    evilIcon.getImageSource('check', 40),
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              stack: {
                children: [{ component: { name: 'app.DashboardScreen' } }],
                options: {
                  bottomTab: {
                    text: 'Dashboard',
                    fontSize: 12,
                    animate: false,
                    icon: sources[0],
                    iconColor: '#777D71',
                    selectedIconColor: '#373234',
                    textColor: '#777D71',
                    selectedTextColor: '#373234',
                    fontFamily: 'Helvetica',
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'app.HistoryScreen',
                      options: {
                        topBar: {
                          visible: false,
                          height: 0,
                          elevation: 0,
                        },
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'History',
                    icon: sources[1],
                  },
                },
              },
            },
            {
              stack: {
                children: [{ component: { name: 'app.DevicesScreen' } }],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Devices',
                    icon: sources[3],
                  },
                },
              },
            },
            {
              stack: {
                children: [{ component: { name: 'app.SettingsScreen' } }],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Settings',
                    icon: sources[2],
                  },
                  topBar: {
                    title: {
                      text: 'Settings',
                    },
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
};

export default startTabs;
