import { ACTIONS } from '../../constants';
import axios from '../../services/axios';

const authStart = () => {
  return {
    type: ACTIONS.AUTH_START,
  };
};

const authFailed = error => {
  return {
    type: ACTIONS.AUTH_FAILED,
    error,
  };
};

const registerSuccess = () => {
  return {
    type: ACTIONS.AUTH_REGISTER_SUCCESS,
  };
};

export const authSuccess = token => {
  return {
    type: ACTIONS.AUTH_SUCCESS,
    token,
  };
};

export const signOut = () => {
  return {
    type: ACTIONS.AUTH_OUT,
  };
};

export const errorConfirmed = () => {
  return {
    type: ACTIONS.AUTH_ERROR_CONFIRM,
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post('/auth', { params: { email, password } })
      .then(resp => {
        const data = JSON.parse(resp.data.result);
        dispatch(authSuccess(data.token));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(authFailed(message));
      });
  };
};

export const authRegister = data => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post('/register', { ...data })
      .then(resp => {
        const { status } = resp.data;
        if (status === 200) {
          dispatch(registerSuccess());
        }
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(authFailed(message));
      });
  };
};
