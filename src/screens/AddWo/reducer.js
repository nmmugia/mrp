import { ACTIONS } from '../../constants';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getWOValueStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const getWOValueFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.message,
  });
};

const getWOValueSuccess = (state, action) => {
  let { data } = action;
  data = data.data ? data.data : data;
  return updateObject(state, {
    loading: false,
    data,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_WO_VALUE_START:
      return getWOValueStart(state);
    case ACTIONS.GET_WO_VALUE_FAILED:
      return getWOValueFailed(state, action);
    case ACTIONS.GET_WO_VALUE_SUCCESS:
      return getWOValueSuccess(state, action);
    default:
      return state;
  }
};

export default reducers;
