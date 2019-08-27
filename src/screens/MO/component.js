import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Searchbar, FAB, List } from 'react-native-paper';
import PropTypes from 'prop-types';
import CaribeScanner from './caribe';

class Component extends React.Component {
  componentWillMount() {
    const { actions, token } = this.props;
    actions.getMO(token);
  }

  // onFormSubmited = values => {
  //   const { actions } = this.props;
  //   actions.auth(values.email, values.password);
  // };

  // onRegister = values => {
  //   const { actions } = this.props;
  //   actions.authRegister(values);
  // };

  render() {
    const { data } = this.props;
    const list = data
      ? Object.keys(data).map(i => {
          return (
            <List.Item
              title={data[i].name}
              key={i}
              description={() => (
                <View>
                  <Text>{`${data[i].qty} ${data[i].product}`}</Text>
                </View>
              )}
            />
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
        <Searchbar placeholder="Search" />
        <ScrollView>{list}</ScrollView>
        <FAB
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 5 }}
          small
          icon="add"
          onPress={() => console.log('Pressed')}
        />
      </View>
    );
  }
}

Component.propTypes = {
  actions: PropTypes.object.isRequired,
  isLogged: PropTypes.bool,
  error: PropTypes.object,
  loading: PropTypes.bool,
  token: PropTypes.string,
  data: PropTypes.object,
};

export default Component;
