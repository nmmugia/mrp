import { ACTIONS } from '../../constants';
import axios from '../../services/axios';

const getProductStart = () => {
  return {
    type: ACTIONS.GET_PRODUCT_START,
  };
};

export const getProductSuccess = data => {
  return {
    type: ACTIONS.GET_PRODUCT_SUCCESS,
    data,
  };
};

export const getProductFailed = message => {
  return {
    type: ACTIONS.GET_PRODUCT_FAILED,
    message,
  };
};

export const getProduct = token => {
  return dispatch => {
    dispatch(getProductStart());
    axios
      .get('/get_product_list', { params: { token } })
      .then(resp => {
        const { data } = resp;
        dispatch(getProductSuccess(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(getProductFailed(message));
      });
  };
};

export const getProductByRef = (token, ref) => {
  return dispatch => {
    dispatch(getProductStart());
    axios
      .get('/get_product_list', { params: { token, ref } })
      .then(resp => {
        const { data } = resp;
        dispatch(getProductSuccess(data));
      })
      .catch(error => {
        const { message } = error.response.data;
        dispatch(getProductFailed(message));
      });
  };
};
