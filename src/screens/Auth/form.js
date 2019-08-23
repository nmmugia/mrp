import React from 'react';
import { View, StyleSheet } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Input from '../../components/Forms/Input/Input';
import { validate } from './validation';

const styles = StyleSheet.create({
  formContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
  },
  btnLogin: {
    alignSelf: 'center',
    width: 343,
    backgroundColor: '#7c7bad',
  },
});

const form = props => {
  const { handleSubmit, anyTouched, error, invalid, loading } = props;
  return (
    <View style={styles.formContainer}>
      <Field
        name="email"
        type="text"
        icon="envelope"
        component={Input}
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        placeholder="Email"
      />
      <Field name="password" type="password" icon="lock" component={Input} placeholder="Password" />
      <Button
        onPress={handleSubmit}
        title="Sign In"
        type="solid"
        buttonStyle={styles.btnLogin}
        disabled={loading || !anyTouched || error || invalid}
        disabledStyle={{ backgroundColor: '#a1a5c4' }}
        disabledTitleStyle={{ color: '#fff' }}
        titleStyle={{ fontSize: 14 }}
        loading={loading}
      />
    </View>
  );
};
form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  anyTouched: PropTypes.bool,
  error: PropTypes.any,
  invalid: PropTypes.bool,
  loading: PropTypes.bool,
};
const createReduxForm = reduxForm({ form: 'login', validate });
const formComponent = createReduxForm(form);

export default formComponent;
