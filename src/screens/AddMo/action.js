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

export const addMo = data => {
  return dispatch => {
    dispatch(startAddMo());
    axios.post('', { params: { data } });
  };
};
