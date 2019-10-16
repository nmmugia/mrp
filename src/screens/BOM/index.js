import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import Component from './component';

const mapStateToProps = state => {
  const { auth, bom } = state;
  return {
    isLogged: auth.token !== null,
    loading: auth.loading,
    error: auth.error,
    token: auth.token.token,
    data: bom.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
