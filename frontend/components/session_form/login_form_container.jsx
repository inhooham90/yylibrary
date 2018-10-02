import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './login_form';
import { login, receiveNoErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveNoErrors()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
