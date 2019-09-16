import { ACTIONS } from '../../constants';
import axios from '../../services/axios';

const startAddMo = () => {
  return {
    type: ACTIONS.GET_MO_START,
  };
};

export const successAddMo = data => {
  return {
    type: ACTIONS.GET_MO_SUCCESS,
    data,
  };
};

export const failedAddMo = message => {
  return {
    type: ACTIONS.GET_MO_FAILED,
    message,
  };
};

export const getMo = token => {
  return dispatch => {
    dispatch(startAddMo);
    axios
      .get('/get_mo', { params: { token } })
      .then(resp => {
        const { data } = resp;
        dispatch(successAddMo(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(successAddMo(message));
      });
  };
};

export const addMo = data => {
  return dispatch => {
    dispatch(startAddMo());
    axios
      .get('/get_mo', { params: { data } })
      .then(resp => {
        dispatch(successAddMo(resp));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(successAddMo(message));
      });
  };
};
