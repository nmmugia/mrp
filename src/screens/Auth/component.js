import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
// import { getTokenFromStorage } from '../../store/utility'
// import { Image } from 'react-native-elements';
import PropTypes from 'prop-types';
import startTabs from '../Tabs';
import Form from './form';
import FormRegister from './formRegister';
import styles from './styles';
import { showToast } from '../../shared/utility';

class Component extends React.Component {
  state = {
    loginForm: true,
  };

  componentDidUpdate(prevProps) {
    const { isLogged, error, loading, actions, successRegister } = this.props;
    const { loginForm } = this.state;
    if (isLogged) {
      startTabs();
    }
    if (error && !loading) {
      Alert.alert(
        'Sign In Failed',
        `${error}`,
        [{ text: 'Try Again', onPress: () => actions.errorConfirmed() }],
        { cancelable: false }
      );
    }
    if (successRegister && !prevProps.successRegister) {
      showToast('Registration Success. Please Login with Your New Account');
      this.setState({ loginForm: !loginForm });
    }
  }

  onFormSubmited = values => {
    const { actions } = this.props;
    actions.auth(values.email, values.password);
  };

  onRegister = values => {
    const { actions } = this.props;
    actions.authRegister(values);
  };

  render() {
    const { loading } = this.props;
    const { loginForm } = this.state;
    const form = loginForm ? (
      <Form onSubmit={this.onFormSubmited} loading={loading} />
    ) : (
      <View style={styles.formContainer}>
        <ScrollView keyboardShouldPersistTaps="always">
          <FormRegister onSubmit={this.onRegister} loading={loading} />
        </ScrollView>
      </View>
    );
    return (
      <View style={styles.loginScreen}>
        {/* <View>
          <Image source={logo} style={styles.logoContainer} />
        </View> */}
        {form}
      </View>
    );
  }
}

Component.propTypes = {
  actions: PropTypes.object.isRequired,
  isLogged: PropTypes.bool,
  error: PropTypes.object,
  loading: PropTypes.bool,
  successRegister: PropTypes.bool,
};

export default Component;
