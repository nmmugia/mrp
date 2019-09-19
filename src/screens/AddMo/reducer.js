import { ACTIONS } from '../../constants';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getMOValueStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const getMOValueFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.message,
  });
};

const getMOValueSuccess = (state, action) => {
  let { data } = action;
  data = data.data ? data.data : data;
  return updateObject(state, {
    loading: false,
    data,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_MO_VALUE_START:
      return getMOValueStart(state);
    case ACTIONS.GET_MO_VALUE_FAILED:
      return getMOValueFailed(state, action);
    case ACTIONS.GET_MO_VALUE_SUCCESS:
      return getMOValueSuccess(state, action);
    default:
      return state;
  }
};

export default reducers;
