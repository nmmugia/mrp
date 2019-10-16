import { ACTIONS } from '../../constants';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const getBOMStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const getBOMFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.message,
  });
};

const getBOMSuccess = (state, action) => {
  const { data } = action;
  return updateObject(state, {
    loading: false,
    data,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_BOM_START:
      return getBOMStart(state);
    case ACTIONS.GET_BOM_FAILED:
      return getBOMFailed(state, action);
    case ACTIONS.GET_BOM_SUCCESS:
      return getBOMSuccess(state, action);
    default:
      return state;
  }
};

export default reducers;
