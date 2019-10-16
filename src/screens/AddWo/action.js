import { ACTIONS } from '../../constants';
import axios from '../../services/axios';

const startAddWO = () => {
  return {
    type: ACTIONS.GET_WO_VALUE_START,
  };
};

export const successAddWO = data => {
  return {
    type: ACTIONS.GET_WO_VALUE_SUCCESS,
    data,
  };
};

export const failedAddWO = message => {
  return {
    type: ACTIONS.GET_WO_VALUE_FAILED,
    message,
  };
};

export const getWo = token => {
  return dispatch => {
    dispatch(startAddWO);
    axios
      .get('/get_mo', { params: { token } })
      .then(resp => {
        const { data } = resp;
        dispatch(successAddWO(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(successAddWO(message));
      });
  };
};

export const AddWO = data => {
  return dispatch => {
    dispatch(startAddWO());
    axios
      .get('/get_mo', { params: { data } })
      .then(resp => {
        dispatch(successAddWO(resp));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(successAddWO(message));
      });
  };
};

export const getWOById = data => {
  const { id, token } = data;
  return dispatch => {
    dispatch(startAddWO());
    axios
      .get('/get_wo_by_id', { params: { id, token } })
      .then(resp => {
        dispatch(successAddWO(resp));
      })
      .catch(error => {
        const { message } = error.response.data;
        console.log(error);
        dispatch(failedAddWO(message));
      });
  };
};
