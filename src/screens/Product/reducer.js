import { ACTIONS, url } from '../../constants';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getProductStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const getProductFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.message,
  });
};

const getProductSuccess = (state, action) => {
  const { data } = action;
  Object.keys(data).map(i => {
    data[i].image = `${url}/web/image?model=product.template&field=image_small&id=${i.toString()}&unique=`;
  });
  return updateObject(state, {
    loading: false,
    data,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCT_START:
      return getProductStart(state);
    case ACTIONS.GET_PRODUCT_FAILED:
      return getProductFailed(state, action);
    case ACTIONS.GET_PRODUCT_SUCCESS:
      return getProductSuccess(state, action);
    default:
      return state;
  }
};

export default reducers;
