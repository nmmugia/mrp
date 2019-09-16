import React from 'react';
import { View, Text, ScrollView, DeviceEventEmitter } from 'react-native';
import {
  Header,
  Fab,
  List,
  ListItem,
  Icon,
  Input,
  Button,
  Item,
  Body,
  Left,
  Right,
} from 'native-base';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
// import CaribeScanner from './caribe';

class Component extends React.Component {
  componentWillMount() {
    const { actions, token } = this.props;
    actions.getMO(token);
    this.subscription = DeviceEventEmitter.addListener('scanCode', e => {
      actions.getMOByRef(token, e.code);
    });
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    const { data } = this.props;
    const list = data
      ? Object.keys(data).map(i => {
          return (
            <ListItem
              key={i}
              onPress={() => {
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'app.MOFormScreen',
                    passProps: {
                      text: 'MO Form',
                    },
                    options: {
                      topBar: {
                        title: {
                          text: 'MO Form',
                        },
                      },
                    },
                  },
                });
              }}
            >
              <Left>
                <Text>{data[i].name}</Text>
              </Left>
              <Body>
                <Text note>{`${data[i].qty} ${data[i].product}`}</Text>
              </Body>
              <Right>
                <Text>{data[i].state}</Text>
              </Right>
            </ListItem>
          );
        })
      : null;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Header style={{ backgroundColor: '#f9f9f9' }} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView>
          <List>{list}</List>
        </ScrollView>
        <Fab
          style={{ backgroundColor: '#7c7bad' }}
          position="bottomRight"
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'app.MOFormScreen',
                passProps: {
                  text: 'MO Form',
                },
                options: {
                  topBar: {
                    title: {
                      text: 'MO Form',
                    },
                  },
                },
              },
            });
          }}
        >
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

Component.propTypes = {
  actions: PropTypes.object.isRequired,
  // isLogged: PropTypes.bool,
  // error: PropTypes.object,
  // loading: PropTypes.bool,
  token: PropTypes.string,
  data: PropTypes.object,
};

export default Component;
