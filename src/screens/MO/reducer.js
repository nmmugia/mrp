import { ACTIONS } from '../../constants';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getMOStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const getMOFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.message,
  });
};

const getMOSuccess = (state, action) => {
  const { data } = action;
  return updateObject(state, {
    loading: false,
    data,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_MO_START:
      return getMOStart(state);
    case ACTIONS.GET_MO_FAILED:
      return getMOFailed(state, action);
    case ACTIONS.GET_MO_SUCCESS:
      return getMOSuccess(state, action);
    default:
      return state;
  }
};

export default reducers;
