import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  logoContainer: {
    width: 200,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  formContainer: {
    justifyContent: 'space-between',
  },
  usernameInput: {
    height: 40,
    marginBottom: 10,
    borderColor: '#acabab',
    borderWidth: 1,
    borderRadius: 1,
  },
  passBOMrdInput: {
    height: 40,
    borderColor: '#acabab',
    borderWidth: 1,
    borderRadius: 1,
    marginBottom: 10,
  },
  btnLogin: {
    alignSelf: 'center',
    width: 343,
    backgroundColor: '#7c7bad',
  },
  footer: {
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    paddingVertical: 15,
  },
});
