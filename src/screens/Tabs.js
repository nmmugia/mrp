import { Navigation } from 'react-native-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const startTabs = () => {
  Promise.all([
    FontAwesome.getImageSource('gear', 40),
    FontAwesome.getImageSource('bullhorn', 40),
    FontAwesome.getImageSource('file-o', 40),
    FontAwesome.getImageSource('barcode', 40),
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              stack: {
                children: [{ component: { name: 'app.MOScreen' } }],
                options: {
                  bottomTab: {
                    text: 'Manufacturing Orders',
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
            // {
            //   stack: {
            //     children: [
            //       {
            //         component: {
            //           name: 'app.HistoryScreen',
            //           options: {
            //             topBar: {
            //               visible: false,
            //               height: 0,
            //               elevation: 0,
            //             },
            //           },
            //         },
            //       },
            //     ],
            //     options: {
            //       bottomTab: {
            //         fontSize: 12,
            //         text: 'Work Orders',
            //         icon: sources[1],
            //       },
            //     },
            //   },
            // },
            // {
            //   stack: {
            //     children: [{ component: { name: 'app.DevicesScreen' } }],
            //     options: {
            //       bottomTab: {
            //         fontSize: 12,
            //         text: 'Products',
            //         icon: sources[3],
            //       },
            //     },
            //   },
            // },
            // {
            //   stack: {
            //     children: [{ component: { name: 'app.SettingsScreen' } }],
            //     options: {
            //       bottomTab: {
            //         fontSize: 12,
            //         text: 'BOM',
            //         icon: sources[2],
            //       },
            //       topBar: {
            //         title: {
            //           text: 'BOM',
            //         },
            //       },
            //     },
            //   },
            // },
          ],
        },
      },
    });
  });
};

export default startTabs;
