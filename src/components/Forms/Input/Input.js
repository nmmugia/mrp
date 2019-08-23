import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, Picker, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  usernameInput: {
    backgroundColor: '#fff',
    height: 43,
    marginBottom: 10,
    borderColor: '#adadad',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 8,
  },
  inputCustom: {
    color: '#777777',
    fontSize: 13,
  },
});

const CustomInput = props => {
  const { input, meta, type, options, ...inputProps } = props;
  let inputElement = null;
  const [isSecureText, setSecureText] = useState(true);
  switch (type) {
    case 'text':
      inputElement = (
        <Input
          {...inputProps}
          leftIcon={<Icon color="#5b5b5b" size={14} name={props.icon} style={{ marginRight: 4 }} />}
          inputContainerStyle={style.usernameInput}
          onChangeText={input.onChange}
          inputStyle={style.inputCustom}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          placeholderStyle={{ fontSize: 12 }}
          errorStyle={{ color: 'red', marginTop: 2 }}
          errorMessage={meta.visited && !meta.active && meta.invalid ? meta.error : ''}
          leftIconContainerStyle={{ marginLeft: 0 }}
        />
      );
      break;
    case 'texteditdisabled':
      inputElement = (
        <Input
          {...inputProps}
          leftIcon={<Icon color="#5b5b5b" size={14} name={props.icon} style={{ marginRight: 4 }} />}
          inputContainerStyle={{ ...style.usernameInput, backgroundColor: '#eaeaea' }}
          onChangeText={input.onChange}
          editable={false}
          inputStyle={{ color: '#777777', fontSize: 13 }}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          placeholderStyle={{ fontSize: 12 }}
          errorStyle={{ color: 'red', marginTop: 2 }}
          errorMessage={meta.visited && !meta.active && meta.invalid ? meta.error : ''}
          leftIconContainerStyle={{ marginLeft: 0 }}
          value={input.value ? input.value : meta.initial}
        />
      );
      break;

    case 'password':
      inputElement = (
        <Input
          {...inputProps}
          leftIcon={<Icon color="#5b5b5b" size={14} name="lock" style={{ marginRight: 4 }} />}
          rightIcon={
            <TouchableOpacity style={{ padding: 3 }} onPress={() => setSecureText(!isSecureText)}>
              <Text style={{ fontSize: 11, color: '#7c7bad', fontWeight: 'bold' }}>
                {isSecureText ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          }
          inputContainerStyle={style.usernameInput}
          onChangeText={input.onChange}
          inputStyle={{ color: '#777777', fontSize: 13 }}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          placeholderStyle={{ fontSize: 12 }}
          secureTextEntry={isSecureText}
          errorStyle={{ color: 'red', marginTop: 2 }}
          autoCapitalize="none"
          errorMessage={meta.visited && !meta.active && meta.invalid ? meta.error : ''}
          leftIconContainerStyle={{ marginLeft: 0 }}
        />
      );
      break;

    case 'number':
      inputElement = (
        <Input
          {...inputProps}
          rightIcon={{ type: 'material', name: props.icon, color: '#5b5b5b', size: 18 }}
          inputContainerStyle={style.usernameInput}
          onChangeText={input.onChange}
          inputStyle={{ color: '#777777', paddingVertical: 2, fontSize: 13 }}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          placeholderStyle={{ fontSize: 12 }}
          errorStyle={{ color: 'red', marginTop: 2 }}
          keyboardType="numeric"
          errorMessage={meta.visited && !meta.active && meta.invalid ? meta.error : ''}
          leftIconContainerStyle={{ marginLeft: 0 }}
        />
      );
      break;
    case 'select':
      inputElement = (
        <Picker
          selectedValue={input.value}
          style={{ height: 50, width: 200 }}
          onValueChange={input.onChange}
        >
          {options.map((option, index) => {
            return <Picker.Item key={index} label={option.label} value={option.value} />;
          })}
        </Picker>
      );
      break;
    default:
      inputElement = (
        <TextInput
          {...inputProps}
          style={style.usernameInput}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
        />
      );
  }

  return <>{inputElement}</>;
};

CustomInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string,
  options: PropTypes.object,
  icon: PropTypes.string,
};

export default CustomInput;
