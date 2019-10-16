import { ACTIONS } from '../../constants';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getWOStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const getWOFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.message,
  });
};

const getWOSuccess = (state, action) => {
  const { data } = action;
  return updateObject(state, {
    loading: false,
    data,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_WO_START:
      return getWOStart(state);
    case ACTIONS.GET_WO_FAILED:
      return getWOFailed(state, action);
    case ACTIONS.GET_WO_SUCCESS:
      return getWOSuccess(state, action);
    default:
      return state;
  }
};

export default reducers;
