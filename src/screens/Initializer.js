import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTokenFromStorage } from '../shared/utility';
import * as act from './Auth/action';
import startTabs from './Tabs';

class Initializer extends Component {
  componentDidMount() {
    const { actions } = this.props;
    getTokenFromStorage().then(token => {
      if (token) {
        actions.authSuccess(token);
        startTabs();
      } else {
        Navigation.setRoot({
          root: {
            component: {
              name: 'app.AuthScreen',
            },
          },
        });
      }
    });
  }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.token === this.props.token
  // }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 70,
        }}
      >
        <ActivityIndicator size="large" color="#7c7bad" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isLogged: !state.auth.id === null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(act, dispatch),
  };
};

Initializer.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initializer);
