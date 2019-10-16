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
  Thumbnail,
} from 'native-base';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
// import CaribeScanner from './caribe';

class Component extends React.Component {
  componentWillMount() {
    const { actions, token } = this.props;
    actions.getBOM(token);
    this.subscription = DeviceEventEmitter.addListener('scanCode', e => {
      actions.getBOMByRef(token, e.code);
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
                    name: 'app.BOMFormScreen',
                    passProps: {
                      text: 'BOM Form',
                    },
                    options: {
                      topBar: {
                        title: {
                          text: 'BOM Form',
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
                <Text>{data[i].production_id}</Text>
                <Text note>{`${data[i].product} - ${data[i].qty_production} ${data[i].uom}`}</Text>
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
                name: 'app.BOMFormScreen',
                passProps: {
                  text: 'BOM Form',
                },
                options: {
                  topBar: {
                    title: {
                      text: 'BOM Form',
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
