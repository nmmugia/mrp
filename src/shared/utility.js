import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const showMinutes = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes}: ${seconds}`;
};

export const getTokenFromStorage = async () => {
  return await AsyncStorage.getItem('token');
};

export const removeTokenFromStorage = async () => {
  return await AsyncStorage.removeItem('token');
};

export const reqHeader = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const setTokenToStorage = async token => {
  return await AsyncStorage.setItem('token', token);
};

export const showToast = message => {
  ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 75);
};
