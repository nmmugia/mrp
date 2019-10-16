import { ACTIONS } from '../../constants';
import axios from '../../services/axios';

const getBOMStart = () => {
  return {
    type: ACTIONS.GET_BOM_START,
  };
};

export const getBOMSuccess = data => {
  return {
    type: ACTIONS.GET_BOM_SUCCESS,
    data,
  };
};

export const getBOMFailed = message => {
  return {
    type: ACTIONS.GET_BOM_FAILED,
    message,
  };
};

export const getBOM = token => {
  return dispatch => {
    dispatch(getBOMStart());
    axios
      .get('/get_BOM_list', { params: { token } })
      .then(resp => {
        const { data } = resp;
        dispatch(getBOMSuccess(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(getBOMFailed(message));
      });
  };
};

export const getBOMByRef = (token, ref) => {
  return dispatch => {
    dispatch(getBOMStart());
    axios
      .get('/get_BOM_list', { params: { token, ref } })
      .then(resp => {
        const { data } = resp;
        dispatch(getBOMSuccess(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(getBOMFailed(message));
      });
  };
};
