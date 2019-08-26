import jwtDecode from 'jwt-decode';
import { ACTIONS } from '../../constants';
import { updateObject, setTokenToStorage } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  id: null,
  username: null,
  fullname: null,
  email: null,
  token: null,
  successRegister: false,
};

const authStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const authFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const authSuccess = (state, action) => {
  const { token } = action;
  const data = jwtDecode(token);
  setTokenToStorage(token).then(err => {
    if (err) authFailed(err);
  });

  return updateObject(state, {
    loading: false,
    id: data.sub,
    token: action,
  });
};

const errorConfirm = state => {
  return updateObject(state, {
    error: null,
  });
};

const registerSuccess = state => {
  return updateObject(state, {
    loading: false,
    error: null,
    successRegister: true,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_START:
      return authStart(state, action);
    case ACTIONS.AUTH_SUCCESS:
      return authSuccess(state, action);
    case ACTIONS.AUTH_FAILED:
      return authFailed(state, action);
    case ACTIONS.AUTH_ERROR_CONFIRM:
      return errorConfirm(state);
    case ACTIONS.AUTH_REGISTER_SUCCESS:
      return registerSuccess(state);
    default:
      return state;
  }
};

export default reducers;
