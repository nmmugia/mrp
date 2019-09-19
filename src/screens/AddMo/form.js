/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Item, Label } from 'native-base';
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
  return (
    <View style={styles.formContainer}>
      <Item floatingLabel>
        <Label>Name</Label>
        <Field
          name="name"
          type="texteditdisabled"
          component={Input}
          autoCapitalize="characters"
          placeholder="MO Name"
        />
      </Item>
      <Item floatingLabel>
        <Label>Product</Label>
        <Field
          name="product"
          type="texteditdisabled"
          component={Input}
          autoCapitalize="characters"
          placeholder="Product"
        />
      </Item>
      <Item floatingLabel>
        <Label>Product Qty</Label>
        <Field
          name="qty"
          type="number"
          component={Input}
          placeholder="Qty to Produce"
          keyboardType="numeric"
        />
      </Item>
      {/*<Field name="bom_id" type="select" component={Input} placeholder="Bill of Material" />*/}
      <Item floatingLabel>
        <Label>Deadline Start</Label>
        <Field
          name="date_planned_start"
          type="date"
          component={Input}
          placeholderText="Deadline Start"
        />
      </Item>
      <Item floatingLabel>
        <Label>Source</Label>
        <Field
          name="origin"
          type="text"
          component={Input}
          autoCapitalize="characters"
          placeholder="Source"
        />
      </Item>
      <Item floatingLabel>
        <Label>Responsible</Label>
        <Field
          name="responsible"
          type="text"
          component={Input}
          autoCapitalize="characters"
          placeholder="Responsible"
        />
      </Item>
    </View>
  );
};
form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.object,
};
const createReduxForm = reduxForm({
  form: 'moForm',
  enableReinitialize: true
});
const formComponent = createReduxForm(form);

export default formComponent;
