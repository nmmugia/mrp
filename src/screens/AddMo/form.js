/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import Input from '../../components/Forms/Input/Input';
// import { validateRegister } from './validation';

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
  const { handleSubmit } = props;
  return (
    <View style={styles.formContainer}>
      <Field
        name="name"
        type="text"
        component={Input}
        autoCapitalize="characters"
        placeholder="MO Name"
      />
      <Field name="product_id" type="select" component={Input} placeholder="Product" />
      <Field
        name="product_qty"
        type="number"
        component={Input}
        placeholder="Qty to Produce"
        keyboardType="numeric"
      />
      <Field name="bom_id" type="select" component={Input} placeholder="Bill of Material" />
      <Field name="date_planned_start" type="date" component={Input} placeholder="Deadline Start" />
      <Field
        name="origin"
        type="text"
        component={Input}
        autoCapitalize="characters"
        placeholder="Source"
      />
    </View>
  );
};
form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
const createReduxForm = reduxForm({ form: 'moForm' });
const formComponent = createReduxForm(form);

export default formComponent;
