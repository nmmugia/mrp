import { ACTIONS } from '../../constants';
import axios from '../../services/axios';

const getWOStart = () => {
  return {
    type: ACTIONS.GET_WO_START,
  };
};

export const getWOSuccess = data => {
  return {
    type: ACTIONS.GET_WO_SUCCESS,
    data,
  };
};

export const getWOFailed = message => {
  return {
    type: ACTIONS.GET_WO_FAILED,
    message,
  };
};

export const getWO = token => {
  return dispatch => {
    dispatch(getWOStart());
    axios
      .get('/get_wo_list', { params: { token } })
      .then(resp => {
        const { data } = resp;
        dispatch(getWOSuccess(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(getWOFailed(message));
      });
  };
};

export const getWOByRef = (token, ref) => {
  return dispatch => {
    dispatch(getWOStart());
    axios
      .get('/get_wo_list', { params: { token, ref } })
      .then(resp => {
        const { data } = resp;
        dispatch(getWOSuccess(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(getWOFailed(message));
      });
  };
};
