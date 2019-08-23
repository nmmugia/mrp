import React from 'react';
import { View, StyleSheet } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-native-elements';
import Input from '../../components/Forms/Input/Input';
import { validateRegister } from './validation';

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

let form = props => {
  return (
    <View style={styles.formContainer}>
      <Field
        name="fullname"
        type="text"
        icon="user"
        component={Input}
        autoCapitalize="words"
        placeholder="Fullname"
      />
      <Field
        name="username"
        type="text"
        icon="at"
        autoCapitalize="none"
        component={Input}
        placeholder="username"
      />
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
      <Field name="password" type="password" icon="eye" component={Input} placeholder="Password" />
      <Field
        name="password_confirmation"
        type="password"
        icon="eye"
        component={Input}
        placeholder="Repeat Password"
      />
      <Field
        name="phone_number"
        type="text"
        icon="phone"
        component={Input}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <Button
        onPress={props.handleSubmit}
        title="Sign Up"
        type="solid"
        buttonStyle={styles.btnLogin}
        disabled={props.loading || !props.anyTouched || props.error || props.invalid}
        disabledStyle={{ backgroundColor: '#64aaaa' }}
        disabledTitleStyle={{ color: '#fff' }}
        titleStyle={{ fontSize: 14 }}
        loading={props.loading}
      />
    </View>
  );
};

form = reduxForm({
  form: 'register',
  validate: validateRegister,
})(form);

export default form;
