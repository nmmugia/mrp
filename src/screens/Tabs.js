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
          options: {
            bottomTabs: {
              animate: true,
              backgroundColor: '#f9f9f9',
            },
          },
          children: [
            {
              stack: {
                children: [{ component: { name: 'app.MOScreen' } }],
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTab: {
                    text: 'Manufacturing Orders',
                    fontSize: 12,
                    animate: false,
                    icon: sources[0],
                    iconColor: '#7c7bad',
                    selectedIconColor: '#5f5e97',
                    textColor: '#7c7bad',
                    selectedTextColor: '#5f5e97',
                    fontFamily: 'Helvetica',
                  },
                },
              },
            },
            {
              stack: {
                children: [{ component: { name: 'app.MOScreen' } }],
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTab: {
                    text: 'Work Order',
                    fontSize: 12,
                    animate: false,
                    icon: sources[1],
                    iconColor: '#7c7bad',
                    selectedIconColor: '#5f5e97',
                    textColor: '#7c7bad',
                    selectedTextColor: '#5f5e97',
                    fontFamily: 'Helvetica',
                  },
                },
              },
            },
            {
              stack: {
                children: [{ component: { name: 'app.MOScreen' } }],
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTab: {
                    text: 'Product',
                    fontSize: 12,
                    animate: false,
                    icon: sources[2],
                    iconColor: '#7c7bad',
                    selectedIconColor: '#5f5e97',
                    textColor: '#7c7bad',
                    selectedTextColor: '#5f5e97',
                    fontFamily: 'Helvetica',
                  },
                },
              },
            },
            {
              stack: {
                children: [{ component: { name: 'app.MOScreen' } }],
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTab: {
                    text: 'BOM',
                    fontSize: 12,
                    animate: false,
                    icon: sources[3],
                    iconColor: '#7c7bad',
                    selectedIconColor: '#5f5e97',
                    textColor: '#7c7bad',
                    selectedTextColor: '#5f5e97',
                    fontFamily: 'Helvetica',
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
