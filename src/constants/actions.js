const actions = {
  GET_DASHBOARD_DATA_START: 'GET_DASHBOARD_DATA_START',
  GET_DASHBOARD_DATA_SUCCESS: 'GET_DASHBOARD_DATA_SUCCESS',
  GET_DASHBOARD_DATA_FAILED: 'GET_DASHBOARD_DATA_FAILED',

  CREATE_CONNECTION_TCP_START: 'CREATE_CONNECTION_TCP_START',
  CREATE_CONNECTION_TCP_SUCCESS: 'CREATE_CONNECTION_TCP_SUCCESS',
  CREATE_CONNECTION_TCP_FAILED: 'CREATE_CONNECTION_TCP_FAILED',

  RESET_LASTUPDATE_TIME: 'RESET_LASTUPDATE_TIME',

  CREATE_CONNECTION_WEBSOCKET_START: 'CREATE_CONNECTION_WEBSOCKET_START',
  CREATE_CONNECTION_WEBSOCKET_SUCCESS: 'CREATE_CONNECTION_WEBSOCKET_SUCCESS',
  CREATE_CONNECTION_WEBSOCKET_FAILED: 'CREATE_CONNECTION_WEBSOCKET_FAILED',

  RECEIVE_DATA_TCP: 'RECEIVE_DATA_TCP',

  AUTH_START: 'AUTH_START',
  AUTH_FAILED: 'AUTH_FAILED',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_OUT: 'AUTH_OUT',
  AUTH_ERROR_CONFIRM: 'AUTH_ERROR_CONFIRM',
  AUTH_REGISTER: 'AUTH_REGISTER',
  AUTH_REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS',

  GET_DEVICES_START: 'GET_DEVICES_START',
  GET_DEVICES_SUCCESS: 'GET_DEVICES_SUCCESS',
  GET_DEVICES_FAILED: 'GET_DEVICES_FAILED',
  CHANGE_DEVICE: 'CHANGE_DEVICE',
  SELECT_DEVICE_ONLINE: 'SELECT_DEVICE_ONLINE',
  SELECT_DEVICE_OFFLINE: 'SELECT_DEVICE_OFFLINE',

  GET_HISTORY_START: 'GET_HISTORY_START',
  GET_HISTORY_SUCCESS: 'GET_HISTORY_SUCCESS',
  GET_HISTORY_FAILED: 'GET_HISTORY_FAILED',

  GET_DETAIL_HISTORY_START: 'GET_DETAIL_HISTORY_START',
  GET_DETAIL_HISTORY_SUCCESS: 'GET_DETAIL_HISTORY_SUCCESS',
  GET_DETAIL_HISTORY_FAILED: 'GET_DETAIL_HISTORY_FAILED',

  PREV_PERIOD: 'PREV_PERIOD',
  NEXT_PERIOD: 'NEXT_PERIOD',

  GET_DEVICE_INFO_START: 'GET_DEVICE_INFO_START',
  GET_DEVICE_INFO_SUCCESS: 'GET_DEVICE_INFO_SUCCESS',
  GET_DEVICE_INFO_FAILED: 'GET_DEVICE_INFO_FAILED',
  SET_DEVICE_SELECTED: 'SET_DEVICE_SELECTED',

  GET_DEVICE_LIST_START: 'GET_DEVICE_LIST_START',
  GET_DEVICE_LIST_SUCCESS: 'GET_DEVICE_LIST_SUCCESS',
  GET_DEVICE_LIST_FAILED: 'GET_DEVICE_LIST_FAILED',

  ADD_NEW_DEVICE_START: 'ADD_NEW_DEVICE_START',
  ADD_NEW_DEVICE_SUCCESS: 'ADD_NEW_DEVICE_SUCCESS',
  ADD_NEW_DEVICE_FAILED: 'ADD_NEW_DEVICE_FAILED',
  SUCCESS_CONFIRMED: 'SUCCESS_CONFIRMED',

  GET_DEVICE_DETAIL_START: 'GET_DEVICE_DETAIL_START',
  GET_DEVICE_DETAIL_SUCCESS: 'GET_DEVICE_DETAIL_SUCCESS',
  GET_DEVICE_DETAIL_FAILED: 'GET_DEVICE_DETAIL_FAILED',
};

export default actions;