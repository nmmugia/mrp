import { ACTIONS } from '../../constants';
import axios from '../../services/axios';

const getMOStart = () => {
  return {
    type: ACTIONS.GET_MO_START,
  };
};

export const getMOSuccess = data => {
  return {
    type: ACTIONS.GET_MO_SUCCESS,
    data,
  };
};

export const getMOFailed = message => {
  return {
    type: ACTIONS.GET_MO_FAILED,
    message,
  };
};

export const getMO = token => {
  return dispatch => {
    dispatch(getMOStart());
    axios
      .get('/get_mo', { params: { token } })
      .then(resp => {
        const { data } = resp;
        dispatch(getMOSuccess(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(getMOFailed(message));
      });
  };
};
